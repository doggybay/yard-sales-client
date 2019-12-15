import React, { Fragment } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { Paper, TextField, Typography, Grid, Button, Avatar, MobileStepper } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
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
  }
}))

const AddSaleForm = (props) => { 
  const classes = useStyles()

  const { title, setTitle, details, setDetails, address, setAddress, zipCode, setZipCode, pictures, setPictures, selectedDate, setClickedPicBtn, clickedPicBtn } = props

  const { handleDateChange, handleSubmit } = props

  const widget = window.cloudinary.createUploadWidget(
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
  
  const widgetOpen = () => {
    if (!clickedPicBtn) {
      setClickedPicBtn(true)
      widget.open()
    }
  }

  let pictureList = pictures.map(picture => <Avatar className={classes.avatar} src={picture} />)

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
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
  )
}

export default AddSaleForm