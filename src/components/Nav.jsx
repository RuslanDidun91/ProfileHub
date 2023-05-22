import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#FFF',
    color: '#000',
  },
}));

const Nav = ({ check, change }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='relative'>
      <Toolbar >
        <Box sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex'
        }}>
          <ExpandMoreIcon fontSize='large' color='white' />
          <Typography variant="h6">Viral Nation</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LightModeIcon />
          <Switch
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onChange={change}
            checked={check}
          />
          <DarkModeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
