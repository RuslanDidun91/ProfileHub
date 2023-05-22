import { useState, useEffect } from 'react';
import { Container, InputBase, Box } from '@material-ui/core';
import { searchUsersApi } from '../utils/searchUsersApi';
import CreateProfilePopup from './popupWindows/CreateProfilePopup';
import FilterItems from './FilterItems';


const Search = ({ setUsers, users }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.trim() !== '') {
        search();
      }
    }, 700);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  const search = () => {
    searchUsersApi(searchText)
      .then(data => {
        const profiles = data?.data?.getAllProfiles?.profiles || [];
        setUsers(profiles);
      })
      .catch(error => {
        console.error('Error searching:', error);
      });
    setSearchText('');
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '50px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}>
        <InputBase
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          style={{ marginRight: '10px', flex: 1, padding: '8px' }}
        />
        <CreateProfilePopup />
        <FilterItems users={users} setUsers={setUsers}/>
      </Box>
    </Container>
  )
}

export default Search;
