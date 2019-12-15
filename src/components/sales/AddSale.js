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

// Actions
import { addNewSale } from '../../store/sales/actionCreators'

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
  avatarDiv: {
    display: "flex"
  },
  avatar: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(0.5)
  },
  addPicBtn: {
    display: "none"
  },
  stepper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 2),
    marginTop: 10
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
  const [pictures, setPictures] = useState([])
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

  // New sale object
  const newSale = {
    user_id: 8,
    title: title,
    details: details,
    location: `${address}, ${zipCode}`,
    date_time: selectedDate,
    pictures: pictures
  }

  // Picture object
    // pictures = [
    //   "https://loremflickr.com/320/240/bridges",
    //   "https://loremflickr.com/320/240/toys",
    //   "https://loremflickr.com/320/240/ocean",
    //   "https://loremflickr.com/320/240/bread",
    //   "https://loremflickr.com/320/240/door"
    // ]
  
  let pictureList = pictures.map(picture => <Avatar className={classes.avatar} src={picture} />)

  switch (step) {
    case 1:
      return (
        <Fragment>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Add your sale using the form below
          </Typography>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
              <Grid item sm={12}>
                <TextField
                  required
                  id="title"
                  label="Sale Title"
                  defaultValue={title}
                  fullWidth
                  variant="outlined"
                  className={classes.title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  id="details"
                  label="Sale details"
                  defaultValue={details}
                  variant="outlined"
                  multiline
                  rows="6"
                  className={classes.details}
                  onChange={e => setDetails(e.target.value)}
                />
              </Grid>

              {/*Picture upload button*/}
              <Grid item sm={6}>
                <Fragment>
                  <Button
                    onClick={() => widgetOpen()}
                    variant="contained"
                    color="secondary"
                  >
                    Add Pictures
                  </Button>

                  <div className={classes.avatarDiv}>{pictureList}</div>
                </Fragment>
              </Grid>

              <TextField
                required
                id="address"
                label="Sale location"
                defaultValue={address}
                variant="outlined"
                className={classes.address}
                onChange={e => setAddress(e.target.value)}
              />

              <TextField
                required
                id="zipCode"
                label="Zip Code"
                defaultValue={zipCode}
                variant="outlined"
                onChange={e => setZipCode(e.target.value)}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    required
                    margin="normal"
                    id="saleDate"
                    label="Sale date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />

                  <KeyboardTimePicker
                    required
                    margin="normal"
                    id="saleTime"
                    label="Sale time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
          </form>
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



