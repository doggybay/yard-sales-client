import React, { Fragment } from 'react'
import { parseJSON } from 'date-fns'
import { Paper, Typography, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center"
  },
  empty: {
    display: 'none',
  }
}))

const SaleDetails = (props) => {
  const { sale } = props
  const classes = useStyles()
  
  let saleDate = sale.hasOwnProperty('id') ? new Intl.DateTimeFormat("en-us", {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(parseJSON(sale.date_time)) : 'pending date'

  return (
    <Fragment>
      <Grid item sm={2}>
        {/*Details*/}
        <Paper className={classes.empty}>xs=3</Paper>
      </Grid>
      <Grid item sm={8}>
        {/*Location*/}
        <Paper className={classes.paper}>
          <Typography variant="body1">
            {sale.details}
          </Typography>
        </Paper>
      </Grid>
      <Grid item sm={2}>
        <Paper className={classes.empty}>xs=3</Paper>
      </Grid>
      <Grid item sm={2}>
        <Paper className={classes.empty}>xs=3</Paper>
      </Grid>
      <Grid item sm={4}>
        <Paper className={classes.paper}>{sale.location}</Paper>
      </Grid>
      <Grid item sm={4}>
        <Paper className={classes.paper}>{saleDate}</Paper>
      </Grid>
      <Grid item sm={2}>
        <Paper className={classes.empty}>xs=3</Paper>
      </Grid>
    </Fragment>
  )
}

export default SaleDetails