import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/fetchFromApi';
import UserCard from '../components/UserCard';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            image={user.image_url}
            name={user.first_name}
            surname={user.last_name}
            email={user.email}
            description={user.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
