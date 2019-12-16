import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SalePictures from './SalePictures'
import SaleDetails from './SaleDetails'

//component styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main
  }
}))


const Sale = (props) => {
  const classes = useStyles()
  
  const sale = useSelector(state => state.sales.one) || props.sale
  
  const pictures = sale.pictures ? sale.pictures : "pending"


  // const { title, details, user_id, location, date_time } = props.sale

  return (
    <Paper className={classes.root}>
      <Typography color="inherit" variant="h2">
        {sale.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <SalePictures sale={sale} pictures={pictures} />
        </Grid>
        <SaleDetails sale={sale} />
      </Grid>
    </Paper>
  );
}


export default Sale


