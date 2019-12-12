import React, { useState } from 'react'
import 'date-fns'

import { Paper, TextField, Typography, Grid, Button, Avatar, MobileStepper, CardMedia } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'


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
    width: 400
  },
  details: {
    width: 300
  },
  avatarDiv: {
    display: 'flex'
  },
  avatar: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(.5)
  },
  addPicBtn: {
    display: 'none'
  }
}));

const AddSale = () => {
  // Component style classes
  const classes = useStyles()
  const theme = useTheme()

  // State
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [clickedPicBtn, setClickedPicBtn] = useState(false)

  // Cloudinary widget instance to upload images
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dnrmrcpbi',
      uploadPreset: 'ocp6ivsk'
    },
    (error, result) => {
      if (result.event === 'close') {
        setClickedPicBtn(false)
      }
    })

  
  // Component methods
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const widgetToggle = () => {
    if (!clickedPicBtn) {
      setClickedPicBtn(true)
      widget.open()
    }
  }


  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Add your sale using the form below
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container>
          <Grid item sm={12}>
            <TextField
              required
              id="title"
              label="Sale Title"
              defaultValue=""
              fullWidth
              variant="outlined"
              className={classes.title}
            />
          </Grid>

          <Grid item sm={6}>
            <TextField
              id="details"
              label="Sale details"
              defaultValue=""
              variant="outlined"
              multiline
              rows="6"
              className={classes.details}
            />
          </Grid>

          {/*Picture upload button*/}
          <Grid item sm={6}>
            <div>
              <Button
                
                onClick={() => widgetToggle()}
                variant="outlined"
                color="secondary">
                Add Pictures
              </Button>
            </div>
            <div className={classes.avatarDiv}>
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
              <Avatar
                className={classes.avatar}
                src="https://loremflickr.com/320/240/bridges"
              />
            </div>
          </Grid>

          <TextField
            required
            id="address"
            label="Sale location"
            defaultValue=""
            variant="outlined"
            className={classes.address}
          />

          <TextField
            required
            id="zipCode"
            label="Zip Code"
            defaultValue=""
            variant="outlined"
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
  );
}

export default AddSale



