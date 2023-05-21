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

  return (
    <Container container maxWidth="md">
      <Grid container >
        {users?.map((user) => (
          <Grid xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              key={user.id}
              image={user.image_url}
              name={user.first_name}
              surname={user.last_name}
              email={user.email}
              description={user.description}
            />
            <br />
           </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersPage;
