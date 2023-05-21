import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/fetchFromApi';
import UserCard from '../components/UserCard';
import { Container, Grid } from '@material-ui/core';


const UsersPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const handleDeleteUser = (profileId) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== profileId)
    );
    fetchUsers();
  };

//make another api call to receive new users
  const fetchUsers = () => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {users?.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              key={user.id}
              image={user.image_url}
              name={user.first_name}
              surname={user.last_name}
              email={user.email}
              description={user.description}
              onDelete={handleDeleteUser}
              profileId={user.id}
              users={users}
            />
            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersPage;
