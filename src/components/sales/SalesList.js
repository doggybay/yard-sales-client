import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Paper, Grid } from '@material-ui/core'

import { fetchOneSale } from '../../store/sales/actionCreators'

import SaleCard from './SaleCard'

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    marginTop: 15
  },
  media: {
    height: 140
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
  }
}));

const SalesList = () => {
  const dispatch = useDispatch()
  const sales = useSelector(state => state.sales.all)
  const classes = useStyles()

  const filteredSales = sales.filter(sale => (sale.pictures.length > 0))

  const getOneSale = (id) => {
    dispatch(fetchOneSale(id))
  }
  const listOfCards = filteredSales.map(sale => {
    const picture = sale.pictures[0].pic

    return (
      <SaleCard sale={sale} picture={picture} getOneSale={getOneSale} classes={classes} />
    )
  })

  
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" alignItems="center" justify="flex-start">
        {listOfCards}
      </Grid>
    </Paper>
  );
}

export default SalesList

