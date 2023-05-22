import { useState, useEffect } from 'react';
import { Container, InputBase, Box } from '@material-ui/core';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { searchUsersApi } from '../utils/searchUsersApi';

import CreateProfilePopup from './popupWindows/CreateProfilePopup';

const Search = ({ setUsers }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.trim() !== '') {
        search();
      }
    }, 700);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  // const search = () => {
  //   searchUsersApi(searchText)
  //     .then(users => {
  //       setUsers(users);
  //       console.log(users)
  //     })
  //     .catch(error => {
  //       console.error('Error searching:', error);
  //     });
  //   setSearchText('')
  // };

  const search = () => {
    searchUsersApi(searchText)
      .then(data => {
        const profiles = data?.data?.getAllProfiles?.profiles || [];
        setUsers(profiles);
        console.log(data.data.getAllProfiles.profiles)
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
        <ToggleButtonGroup orientation="horizontal"
          sx={{
            marginTop: { xs: '10px', md: 0 },
            marginLeft: { xs: 0, md: '10px' },
            display: { xs: 'none', md: 'flex' }
          }}>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Container>
  )
}

export default Search;
