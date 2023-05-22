import { useEffect } from 'react';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function FilterItems({ users, setUsers }) {
  const [filter, setFilter] = useState('');
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const sorted = [...users].sort((a, b) => {
      if (filter === 'alphabetically') {
        return a.first_name.localeCompare(b.first_name);
      } else if (filter === 'verified') {
        return [...users].filter(user  => user.is_verified)
      }
      else return [...users]
    });

    setUsers(sorted);
  }, [filter]);

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small">sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filter}
        label="types"
        onChange={handleChange}>
        <MenuItem value={'alphabetically'}
          onChange={(e) => setFilter(e.target.value)}>Ascending</MenuItem>
        <MenuItem value={'verified'}
          onChange={(e) => setFilter(e.target.value)}>Verified</MenuItem>
      </Select>
    </FormControl>
  );
}