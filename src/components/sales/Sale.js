import React, { useState } from 'react'
import { Paper, Typography, Grid, Button, MobileStepper } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

//component styles
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.secondary,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 10
  },
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  }
}));

//example data needs to be removed once fetch calls are made
const pictures = [
  { id: 1, pic: "https://loremflickr.com/320/240/furniture" },
  { id: 2, pic: "https://loremflickr.com/320/240/houses" },
  { id: 3, pic: "https://loremflickr.com/320/240/toys" },
  { id: 4, pic: "https://loremflickr.com/320/240/door" },
  { id: 5, pic: "https://loremflickr.com/320/240/yards" },
  { id: 6, pic: "https://loremflickr.com/320/240/tools" }
];

const Sale = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = pictures.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }


  // const { title, details, user_id, location, date_time } = props.sale

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            
            {/*Header */}
            <Typography variant="h1">
              {/*Title */}
              Yard Sale
            </Typography>

            {/*Picture area*/}

            <CardMedia className={classes.media} image={pictures[activeStep].pic} title={pictures[activeStep].id} />
            
            <MobileStepper steps={maxSteps} position="static" variant="text" activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === "rtl" ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === "rtl" ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
                  Back
                </Button>
              }
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


