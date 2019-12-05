import React from 'react'
import './App.css'
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TopNav from './components/layout/TopNav'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  root2: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <TopNav />
      
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App


