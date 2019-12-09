import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Paper, Grid } from '@material-ui/core'

import { fetchOneSale } from '../../store/sales/actionCreators'

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    marginTop: 1
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
          <Link to={`/sale/${sale.id}`}>
            <Button id={sale.id} size="small" color="primary" onClick={() => getOneSale(sale.id)}>
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  })

  
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
      >
        
        {listOfCards}
      </Grid>
    </Paper>
  );
}

export default SalesList

