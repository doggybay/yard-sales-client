import React, { Fragment } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { Paper, TextField, Typography, Grid, Button, Avatar, IconButton, GridListTile, GridListTileBar, GridList } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import CloseIcon from '@material-ui/icons/Close'
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
    width: 280
  },
  upBtn: {
    marginLeft: 10
  },
  avatar: {

    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: theme.spacing(0.5)

  },
  avatarDiv: {
    display: "flex",
    padding: theme.spacing(1),
    
  },
  icon: {
    color: theme.palette.secondary.light
  }
}))

const AddSaleForm = (props) => { 
  const classes = useStyles()

  const { title, setTitle, details, setDetails, address, setAddress, zipCode, setZipCode, pictures, setPictures, selectedDate, setClickedPicBtn, clickedPicBtn } = props

  const { handleDateChange, handleSubmit, removePic } = props

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


  let pictureList = pictures.map((picture, i) => (
    <GridListTile key={i}>

      <img src={picture} alt={title} />

      <GridListTileBar
        actionIcon={
          <IconButton aria-label={`info about ${title}`}
            className={classes.icon}
            onClick={() => removePic(i)}>

            <CloseIcon />

          </IconButton>
        }
      />
    </GridListTile>
  ))

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

            <GridList >{pictureList}</GridList>
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