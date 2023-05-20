import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <Toolbar className={classes.toolbar}>
        <ExpandMoreIcon fontSize='large' color='white'/>
        <Typography variant="h6">iral Nation</Typography>
        <LightModeIcon />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          onChange={change}
          checked={check}
        />
        <DarkModeIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
