import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Viral Nation</Typography>
        <Switch
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          onChange={change}
          checked={check}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
