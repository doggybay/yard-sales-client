import React from 'react'
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.secondary,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

const Sale = (props) => {
  const classes = useStyles()
  const pictures = [{ id: 1, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }, { id: 2, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }, { id: 3, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }, { id: 4, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }, { id: 5, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }, { id: 6, pic: 'https://loremflickr.com/320/240/furniture,houses,toys' }]

  // const { title, details, user_id, location, date_time } = props.sale

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h1">
              {/*Title */}
              Yard Sale
            </Typography>

            {/*Picture*/}
            <CardMedia
              className={classes.media}
              image="https://loremflickr.com/320/240/furniture,houses,toys"
              title="house"
            />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default Sale


