import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Paper, Grid, Container, Divider } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 1
    },
    padding: theme.spacing(3, 2),
    marginTop: 10,
    
  },
  formPaper: {
    backgroundColor: theme.palette.secondary.light,

  },
  formBtn: {
    color: "white"
  }
}))

const Login = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <Grid item sm={12}>
            <TextField id="email" label="Enter Your Email" variant="outlined" />
            <TextField id="password" label="Enter Your Password" variant="outlined" />
          </Grid>
          <Grid item sm={12}>
            <Button color="secondary" variant="contained">Submit</Button>
            <Button color="secondary" variant="contained">Cancel</Button>
          </Grid>
        </Grid>
      </form>
      
    </Paper>
  );
}

export default Login