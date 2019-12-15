import React, { useState } from 'react'
import { Paper, Button, MobileStepper, CardMedia } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 10
  },
  stepper: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText
  },
}))

const SalePictures = (props) => {
  const { sale, pictures } = props
  const classes = useStyles()
  const theme = useTheme()

  //Picture area
  //state
  const [activeStep, setActiveStep] = useState(0)

  const maxSteps = pictures !== "pending" ? pictures.length : 0

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Paper className={classes.root}>
      <CardMedia className={classes.media} image={pictures !== "pending" ? pictures[activeStep].pic : "https://loremflickr.com/320/240/bridges"} title={sale.title} />

      <MobileStepper className={classes.stepper} steps={maxSteps} position="static" variant="text" activeStep={activeStep}
        nextButton={
          <Button color="inherit" size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
                  {theme.direction === "rtl" ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
          </Button>
        }
        backButton={
          <Button color="inherit" size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
            Back
                </Button>
        }
      />

    </Paper>
  )
}

export default SalePictures