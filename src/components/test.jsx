import React, { useEffect, useState } from 'react';

const apiToken = process.env.REACT_APP_API_TOKEN;

const getUsers = async () => {
  const response = await fetch('https://api.poc.graphql.dev.vnplatform.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
        getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
          size
          profiles {
            id
            first_name
            last_name
            email
            is_verified
            image_url
            description
          }
        }
      }`,
      variables: JSON.stringify({
        orderBy: {
          key: 'is_verified',
          sort: 'desc'
        },
        rows: 10,
        page: 0,
        searchString: ''
      })
    })
  });
  const data = await response.json();
  console.log(data);
  return data.data.getAllProfiles.profiles;
};

const UserList = () => {
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
        {users.map((user) => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
