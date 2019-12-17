import React from 'react'
import { parseJSON } from 'date-fns'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const SaleCard = ({ sale, picture, getOneSale, classes }) => {
  let saleDate = sale.hasOwnProperty('id') ? new Intl.DateTimeFormat("en-us", {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(parseJSON(sale.date_time)) : 'pending date'

  return (
    <Card key={sale.id} className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} title={sale.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sale.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {saleDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
          </Button>
        
        <Button id={sale.id} size="small" color="primary" onClick={() => getOneSale(sale.id)} component={Link} to={`/sale/${sale.id}`}>
          Learn More
          </Button>
        
      </CardActions>
    </Card>
  )
}

export default SaleCard