/* eslint-disable default-case */
import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Paper, TextField, Typography, Grid, Button, Avatar, MobileStepper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

// Components
import AddSaleConfirm from './AddSaleConfirm'
import AddSaleForm from './AddSaleForm'

// Actions
import { addNewSale } from '../../../../store/sales/actionCreators'

// TODO: Clean up styles and move to a file under the corresponding component
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    },
    marginTop: 10
  },
  title: {
    margin: theme.spacing(1)
  },
  address: {
    margin: theme.spacing(1),
    width: 350
  },
  details: {
    width: 300
  },
  
  avatar: {
    
    width: theme.spacing(6),
    height: theme.spacing(6),
    
  },
  addPicBtn: {
    height: 157,
    
  },
  stepper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 2),
    marginTop: 10
  },
  avatarRoot: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  }

}));

const AddSale = () => {
  const dispatch = useDispatch()

  // Component style classes
  const classes = useStyles()
  const theme = useTheme()

  // State
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [clickedPicBtn, setClickedPicBtn] = useState(false)
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  let [pictures, setPictures] = useState([])
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [step, setStep] = useState(1)


  // Cloudinary widget instance to upload images
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dnrmrcpbi',
      uploadPreset: 'ocp6ivsk'
    },
    (error, result) => {
      if (result.event === 'close') {
        setClickedPicBtn(false)
      } else if (result.event === 'success') {
        setPictures([...pictures, result.info.secure_url])
      }
    })

  // Component methods
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const widgetOpen = () => {
    if (!clickedPicBtn) {
      setClickedPicBtn(true)
      widget.open()
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewSale(newSale))
  }

  const removePic = (pic) => {
    console.log(pictures)
    pictures.splice(pic, 1)
    console.log(pictures)
    setPictures([...pictures])
  }

  // New sale object
  const newSale = {
    user_id: 8,
    title: title,
    details: details,
    location: `${address}, ${zipCode}`,
    date_time: selectedDate,
    pictures: pictures
  }


  switch (step) {
    case 1:
      return (
        <Fragment>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Add your sale using the form below
          </Typography>
            <AddSaleForm
              title={title} setTitle={setTitle}
              details={details} setDetails={setDetails}
              address={address} setAddress={setAddress}
              zipCode={zipCode} setZipCode={setZipCode}
              pictures={pictures} setPictures={setPictures}
              clickedPicBtn={clickedPicBtn} setClickedPicBtn={setClickedPicBtn}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              handleSubmit={handleSubmit}
              removePic={removePic}
            />
            
        </Paper>
        <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={step}
            className={classes.stepper}
            nextButton={
              <Button
                size="small"
                onClick={nextStep}
                disabled={step === 3}
              >
                Preview
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={prevStep}
                disabled={step === 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
        />
        </Fragment>
      )
    case 2:
      return (
        <Fragment>
          <AddSaleConfirm
            prevStep={prevStep}
            sale={newSale}
            pictures={pictures}
            step={step}
            selectedDate={String(selectedDate)}
          />
          <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={step}
            color="secondary"
            className={classes.stepper}
            nextButton={
              <Button type="submit" size="small" onClick={handleSubmit} disabled={step === 3}>
                Submit
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={prevStep} disabled={step === 1}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Fragment>
      )
    }
  }

  export default AddSale



