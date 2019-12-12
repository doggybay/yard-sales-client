import 'date-fns';
import React from 'react'
import { Paper, TextField, Typography, Grid, Button, MobileStepper, CardMedia } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      
    },
    marginTop: 10
  },
  title: {
    margin: theme.spacing(1),
    
  }
}));

const AddSale = () => {
  
  const classes = useStyles()
  const theme = useTheme()

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Add your sale using the form below
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="title"
            label="Sale Title"
            defaultValue=""
            fullWidth
            variant="outlined"
            className={classes.title}
          />
          <TextField
            required
            id="pictures"
            label="pictures"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            required
            id="details"
            label="details"
            defaultValue=""
            variant="outlined"
            multiline
            rows="4"
          />
          <TextField
            required
            id="Location"
            label="location"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            required
            id="Location"
            label="location"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            required
            id="Location"
            label="location"
            defaultValue=""
            variant="outlined"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />

              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
      </form>
    </Paper>
  );
}

export default AddSale



