import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TopNav from './components/layout/TopNav'
import UserTopNav from './components/layout/UserTopNav'
import LoginTopNav from './components/layout/LoginTopNav'
import UserSideNav from './components/layout/UserSideNav'
import Sale from './components/sales/sale/Sale'
import SalesList from './components/sales/SalesList'
import AddSale from './components/sales/forms/sale/AddSale'
import MySalesList from './components/sales/MySalesList'
import EditSale from './components/sales/forms/edit-sale/EditSale'
import Login from './components/Login'

//Action creators
import { fetchAllSales } from './store/sales/actionCreators'
import { fetchOneUser } from './store/users/actionCreators'


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
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSales())
    dispatch(fetchOneUser(1))
  })

  return (
    <Router>
      <div className="App">
        {/* <LoginTopNav /> */}
        <TopNav />
        <Grid container spacing={2}>
          <UserSideNav />
          {/* <Grid item sm={3}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                Left sheet of paper.
            </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
            </Typography>
            </Paper>
          </Grid> */}
          <Grid item sm>
            <Switch>
              <Route exact path="/" component={SalesList} />
              <Route path="/sale/:id" component={Sale} />
              <Route path="/add-sale" component={AddSale} />
              <Route path="/user-sales" component={MySalesList} />
              <Route path="/edit-user-sale/:id" component={EditSale} />
              <Route path="/login" component={Login} />
            </Switch>
          </Grid>
          <Grid item sm={3}>
            
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App

https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/xbl/gamer/d0ggybay/profile/type/mp

curl--location--request GET 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/iShot%2321899/profile/type/mp'
