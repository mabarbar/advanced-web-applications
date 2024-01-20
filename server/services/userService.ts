import { sha512 } from "js-sha512";

export const userService = {
  authenticate,
};

function authenticate(username: string, password: string) {
  const user = {
    id: "1",
    name: "User",
    password:
      "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",
    email: "user@example.com",
  };

  if (username !== user.name || password !== user.password) {
    return null;
  }

  return user;
}
