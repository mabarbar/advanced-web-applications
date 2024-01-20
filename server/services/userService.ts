export const userService = {
  authenticate,
};

function authenticate(username: string, password: string) {
  const user = {
    id: "1",
    name: "user",
    password: "123",
    email: "user@example.com",
  };

  if (username !== user.name && password !== user.password) {
    return null;
  }

  return user;
}
