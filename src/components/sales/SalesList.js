import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'

import { fetchOneSale } from '../../store/sales/actionCreators'

import SaleTile from './sale/SaleTile'

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
  icon: {
    color: theme.palette.primary.light
  }
}));

const SalesList = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  //Setting store state
  const sales = useSelector(state => state.sales.all)

  //Removing sales that have no pictures
  //Sales require at least 1 picture to post
  const filteredSales = sales.filter(sale => (sale.pictures.length > 0))

  //Get one sale method
  const getOneSale = (id) => {
    dispatch(fetchOneSale(id))
  }

  
  const listOfTiles = filteredSales.map(sale => {
    const picture = sale.pictures[0].pic

    return (
      SaleTile({ sale, picture, classes, getOneSale })
    )
  })

  
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        {listOfTiles}
      </GridList>
    </div>
  );
}

export default SalesList
