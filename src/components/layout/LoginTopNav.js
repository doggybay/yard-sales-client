import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  
}));


const LoginTopNav = () => {
  
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography color="inherit" variant="h6" className={classes.title}>
          Yard Sales
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
      </Toolbar>
    </AppBar>
  );
}

export default LoginTopNav