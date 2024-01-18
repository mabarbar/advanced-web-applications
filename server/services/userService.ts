export const userService = {
  authenticate,
};

function authenticate(username: string, password: string) {
  if (username !== "user" && password !== "123") {
    return null;
  }

  const user = {
    id: "1",
    name: "User",
    email: "user@example.com",
  };

  return user;
}
