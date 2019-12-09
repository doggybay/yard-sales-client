import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const SaleCard = ({ sale, picture, getOneSale, classes }) => {

  return (
    <Card key={sale.id} className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} title={sale.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sale.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {sale.date_time}
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