/* eslint-disable default-case */
import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { parseJSON } from 'date-fns'
import { useHistory } from 'react-router-dom'
import { Paper, Typography, Button, MobileStepper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

// Components
import EditSaleConfirm from './EditSaleConfirm'
import EditSaleForm from './EditSaleForm'

// Actions
import { editSale } from '../../../../store/sales/actionCreators'

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

}))

const EditSale = (props) => {
  const params = useParams()
  // const sale = useSelector(state => state.sales.one) || props.sale
  const userSales = useSelector(state => state.users.oneUser.sales)

  const filteredUserSales = userSales.filter(sale => sale.id === Number(params.id))

  const sale = filteredUserSales[0]
  console.log('user in editSale: ', filteredUserSales)
  console.log('params', params)
  const dispatch = useDispatch()
  const history = useHistory()
  // Component style classes
  const classes = useStyles()
  const theme = useTheme()

  const saleLength = sale.hasOwnProperty('id') ? sale.location.length - 7 : 0
  const saleAddress = sale.hasOwnProperty('id') ? sale.location.slice(0,saleLength) : ''
  const saleZip = sale.hasOwnProperty('id') ? sale.location.slice(-5) : ''
  const saleDate = sale.hasOwnProperty('id') ? new Intl.DateTimeFormat("en-us", {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(parseJSON(sale.date_time)) : new Date()
  


  // State
  const [selectedDate, setSelectedDate] = useState(sale.hasOwnProperty('id') ? saleDate : new Date())
  const [clickedPicBtn, setClickedPicBtn] = useState(false)
  const [title, setTitle] = useState(sale.hasOwnProperty('id') ? sale.title : '')
  const [details, setDetails] = useState(sale.hasOwnProperty('id') ? sale.details : '')
  const [pictures, setPictures] = useState(sale.hasOwnProperty('id') ? sale.pictures : [])
  const [address, setAddress] = useState(sale.hasOwnProperty('id') ? saleAddress : '')
  const [zipCode, setZipCode] = useState(sale.hasOwnProperty('id') ? saleZip : '')
  const [step, setStep] = useState(1)

  // New sale object
  const newSale = {
    id: sale.id,
    user_id: 1,
    title: title,
    details: details,
    location: `${address}, ${zipCode}`,
    date_time: selectedDate,
    pictures: pictures
  }

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

  // const widgetOpen = () => {
  //   if (!clickedPicBtn) {
  //     setClickedPicBtn(true)
  //     widget.open()
  //   }
  // }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(editSale(sale.id, newSale))

    history.push('/user-sales')

  }

  const removePic = (pic) => {
    
    pictures.splice(pic, 1)
    
    setPictures([...pictures])
  }

  switch (step) {
    case 1:
      return (
        <Fragment>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Update your sale using the form below
          </Typography>
            <EditSaleForm
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
              id={sale.id}
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
          <EditSaleConfirm
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
              <Button type="submit" size="small" onClick={handleSubmit} disabled={step === 3} component={Link} to={'/user-sales'}>
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

  export default EditSale