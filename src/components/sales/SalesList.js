import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'

import GridList from '@material-ui/core/GridList';


import { fetchOneSale } from '../../store/sales/actionCreators'

import SaleCard from './SaleCard'
import SaleTile from './SaleTile'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main
  },
  gridList: {
    width: 'auto',
    height: 600,
  },
  subHeader: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  icon: {
    color: theme.palette.primary.light
  },
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
      SaleTile({ sale, picture, classes, getOneSale })
    )
  })

  
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        {listOfCards}
      </GridList>
    </div>
  );
}

export default SalesList
