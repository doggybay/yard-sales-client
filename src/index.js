import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from '@material-ui/core'


//Redux store
import store from './store'

//Material UI theme
import { theme } from './themes/Themes'

//Provider component
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'))
