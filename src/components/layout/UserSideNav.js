import React from 'react'
import { Paper, Typography, Grid, MenuList, MenuItem, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3, 2),
    marginTop: 10,
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
    marginRight: theme.spacing(2),
  }
}))

const UserSideNav = () => {

  const classes = useStyles()

  return (
    <Grid item sm={3}>
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem component={Link} to="/">My Details</MenuItem>
          <MenuItem>My Sales</MenuItem>
          <MenuItem component={Link} to="/add-sale">Add A Sale</MenuItem>
          <MenuItem component={Link} to="/">All Sales</MenuItem>
        </MenuList>
      </Paper>
    </Grid>
  )
}

export default UserSideNav