import React from 'react'
import { Paper, TextField, Typography, Grid, Button, MobileStepper, CardMedia } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 10
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
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
  },
  paper1: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main
  },
  paper2: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light
  },
  stepper: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText
  },
  
}));

const AddSale = () => {
  
  const classes = useStyles()
  const theme = useTheme()


  return (
    <Paper className={classes.paper1}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
        </div>
      </form>
    </Paper>
  );
}
