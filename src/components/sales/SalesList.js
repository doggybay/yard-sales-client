import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Paper, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
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
  const sales = useSelector(state => state.sales.all)
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Paper>
  );
}

export default SalesList

