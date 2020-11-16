export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default class Api {
  getUsers() {
    return Promise.resolve<User[]>([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@acme.com",
      },
      {
        id: "2",
        firstName: "John",
        lastName: "Appleseed",
        email: "john.appleseed@acme.com",
      },
    ]);
  }
}
