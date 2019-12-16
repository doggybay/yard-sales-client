import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="email" label="Enter Your Email" fullWidth />
      <TextField id="password" label="Enter Your Password" fullWidth  />
    </form>
  );
}

export default Login