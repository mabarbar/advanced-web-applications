import NextAuth from "next-auth";

import { authOptions } from "@/server/auth";

// export const nextOption = {
//   secret: process.env.NEXTAUTH_SECRET as string,
// };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
