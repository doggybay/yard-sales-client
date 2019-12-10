import React from 'react'
import { Link } from 'react-router-dom'
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'


const SaleTile = ({ sale, picture, getOneSale, classes }) => {

  return (
    <GridListTile key={sale.id}>

      <img src={picture} alt={sale.title} />

      <GridListTileBar
        title={sale.title}
        subtitle={<span>on {sale.date_time}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${sale.title}`}
            className={classes.icon}
            component={Link} to={`/sale/${sale.id}`}
            onClick={() => getOneSale(sale.id)}>
            
            <InfoIcon />

          </IconButton>
        }
      />
    </GridListTile>
  )
}

export default SaleTile
