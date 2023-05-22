import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/fetchFromApi';
import UserCard from '../components/UserCard';
import { Container, Grid, Box } from '@material-ui/core';
import Search from '../components/Search'
import PaginationComponent from '../components/Pagination';

const UsersPage = () => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedUsers = users.slice(startIndex, endIndex);

  return (
    <Container maxWidth="md" >
      <Search setUsers={setUsers} users={users} />
      <Grid container spacing={2}>
        {slicedUsers?.map((user) => (
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
              isVerified={user.is_verified}
            />
            <br />
          </Grid>
        ))}
      </Grid>
      <Box >
        <PaginationComponent
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default UsersPage;
