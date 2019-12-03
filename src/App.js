import React from 'react'
import './App.css';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import TopNav from './components/layout/TopNav'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
      dark: '#102027',
      light: '#62727b',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0277bd',
      light: '#58a5f0',
      dark: '#004c8c',
      contrastText: '#fff'
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopNav />
      </div>
    </ThemeProvider>
  );
}

export default App
