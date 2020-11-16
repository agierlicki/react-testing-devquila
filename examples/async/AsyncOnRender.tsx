import React from "react";
import Api, { User } from "./api";

const api = new Api();

export default function AsyncOnRender(): JSX.Element | null {
  const [users, setUsers] = React.useState<User[]>();

  React.useEffect(() => {
    api.getUsers().then(setUsers);
  }, [api]);

  if (!users) {
    return null;
  }

  if (users.length === 0) {
    return <div>No users found!</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
      ))}
    </ul>
  );
}
