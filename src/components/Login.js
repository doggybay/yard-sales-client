import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Paper, Grid, Container } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 1
    },
  },
}))

const Login = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Container>
        <Grid container>
          <Grid item sm={6}>
            <Paper elevation={3}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="email" label="Enter Your Email" />
                <TextField id="password" label="Enter Your Password" />

                <Button color="secondary">Submit</Button>
                <Button color="primary">Cancel</Button>
              </form>
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="email" label="Enter Your Email" />
              <TextField id="password" label="Enter Your Password" />

              <Grid item sm={6}>
                <Button color="secondary">Submit</Button>
              </Grid>
              <Grid item sm={6}>
                <Button color="primary">Cancel</Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Login