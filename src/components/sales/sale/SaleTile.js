import React from 'react'
import { useDispatch } from "react-redux";
import { parseJSON } from 'date-fns'
import { Link, useLocation } from 'react-router-dom'
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Edit'

import { fetchOneSale } from '../../../store/sales/actionCreators'


const SaleTile = ({ sale, picture, getOneSale, classes, deleteOneSale, location, editOneSale }) => {
  //const dispatch = useDispatch()
  let saleDate = sale.hasOwnProperty('id') ? new Intl.DateTimeFormat("en-us", {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(parseJSON(sale.date_time)) : 'pending date'

  

  
  

  return (
    <GridListTile key={sale.id}>
      <img src={picture} alt={sale.title} />

      <GridListTileBar
        title={sale.title}
        subtitle={<span>on {saleDate}</span>}
        
        actionIcon={
          <>
            <IconButton
              aria-label={`info about ${sale.title}`}
              className={classes.icon}
              component={Link}
              to={`/sale/${sale.id}`}
              onClick={() => getOneSale(sale.id)}
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              aria-label={`info about ${sale.title}`}
              
              component={Link}
              className={
                location.pathname === "/user-sales" ? classes.icon : classes.empty
              }
              to={`/edit-user-sale/${sale.id}`}
              onClick={() => editOneSale(sale.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label={`info about ${sale.title}`}
              className={
                location.pathname === "/user-sales"
                  ? classes.iconD
                  : classes.empty
              }
              component={Link}
              to={`/user-sales`}
              onClick={() => deleteOneSale(sale.id)}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </GridListTile>
  );
}

export default SaleTile
