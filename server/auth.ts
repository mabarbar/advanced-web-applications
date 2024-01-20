import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./services/userService";
import { sha512 } from "js-sha512";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const hashedPassword = sha512(password);
        return userService.authenticate(username, hashedPassword);
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
