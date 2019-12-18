import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import { useLocation } from 'react-router-dom'

import { fetchOneSale, deleteSale } from '../../store/sales/actionCreators'
import { fetchOneUser } from '../../store/users/actionCreators'

import SaleTile from './sale/SaleTile'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 10,
    
  },
  gridList: {
    width: 'auto',
    height: 600,
  },
  icon: {
    color: theme.palette.secondary.light
  },
  iconD: {
    color: theme.palette.secondary.light
  },
  empty: {
    display: 'none'
  }
}));

const MySalesList = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const location = useLocation()
  //Setting store state
  const user = useSelector(state => state.users.oneUser)
  
  const sales = useSelector(state => state.sales.all.filter(sale => sale.user_id === user.id))
  //Removing sales that have no pictures
  //Sales require at least 1 picture to post
  //const filteredSales = sales.filter(sale => (sale.pictures.length > 0))

  //Get one sale method
  const getOneSale = (id) => {
    dispatch(fetchOneSale(id))
  }

  const editOneSale = (saleId, userId) => {
    dispatch(fetchOneSale(saleId))
    // dispatch(fetchOneUser(userId))
  }
  
  const deleteOneSale = (id) => {
    dispatch(deleteSale(id))
  }

  const id = user.id

  const listOfTiles = sales ? sales.map(sale => {
    const picture = sale ? sale.pictures[0].pic : ''

    return (
      SaleTile({ sale, picture, classes, getOneSale, deleteOneSale, id, location, editOneSale })
    )
  }) : {}


  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        {listOfTiles}
      </GridList>
    </div>
  );
}

export default MySalesList