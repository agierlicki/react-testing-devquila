import React from "react";
import Api, { User } from "./api";

const api = new Api();

export default function AsyncOnClick(): JSX.Element | null {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>something went wrong</div>;
  }

  function fetchUsers() {
    setLoading(true);
    api
      .getUsers()
      .then(setUsers)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      {users.length === 0 ? (
        <div>No users found!</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchUsers}>load users</button>
    </div>
  );
}
