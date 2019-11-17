import { createMuiTheme } from '@material-ui/core/styles';

// Custom theme for the app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6342a5',
      main: '#3c138f',
      dark: '#2a0d64',
      contrastText: '#fff',

    },
    secondary: {
      light: '#4be8d8',
      main: '#1ee3cf',
      dark: '#159e90',
      contrastText: '#fff',
    }
  }
})

export default theme;
