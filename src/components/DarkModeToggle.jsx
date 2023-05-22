import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@material-ui/core/Switch';
import Box from '@mui/material/Box';
import React from 'react';

const DarkModeToggle = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        justifyContent: 'space-between',
        bgcolor: 'background.default',
        color: 'text.primary',
        alignItems: 'center',
        borderRadius: 1,
        display: 'flex',
        width: '100%',
        p: 3,
      }}>
      <Box sx={{
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Box sx={{ fontSize: '40px', fontWeight: 'bold' }}>V</Box> &nbsp;
        iral Nation
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LightModeIcon />
        <Switch
          sx={{ ml: 1 }}
          onClick={toggleColorMode}
          color="primary">
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </Switch>
        <DarkModeIcon />
      </Box>
    </Box>
  );
};

export default DarkModeToggle;
