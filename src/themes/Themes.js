import { createMuiTheme } from '@material-ui/core/styles'


export const theme = createMuiTheme({
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
})