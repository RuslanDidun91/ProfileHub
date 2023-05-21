import React, { useState } from 'react';
import { Container, InputBase, Box } from '@material-ui/core';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

import CreateProfilePopup from './CreateProfilePopup';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search functionality here
    console.log('Searching for:', searchText);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box style={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginBottom: '50px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <InputBase
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          style={{ marginRight: '10px', flex: 1, padding: '8px' }}
        />
        <CreateProfilePopup />
        <ToggleButtonGroup orientation="horizontal"
          sx={{ marginTop: { xs: '10px', md: 0 }, marginLeft: { xs: 0, md: '10px' }, display: { xs: 'none', md: 'flex' } }}
        >
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
