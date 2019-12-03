import React, { Fragment } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, ThemeProvider } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal'
import cyan from '@material-ui/core/colors/cyan';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
      dark: '#102027',
      light: '#62727b',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0277bd',
      light: '#58a5f0',
      dark: '#004c8c',
      contrastText: '#fff'
    },
  }
});

const TopNav = () => {
  
  const classes = useStyles();

  return (
      <AppBar color="primary" position="static">
        <Toolbar >
          <Typography color="inherit" variant="h6" className={classes.title}>
            Yard Sales
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default TopNav