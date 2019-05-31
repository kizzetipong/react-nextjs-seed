/* eslint-disable no-underscore-dangle */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Kanit", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffdc90',
      main: '#ffb71a',
      dark: yellow[700],
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },

  },
  overrides: {
  },
}));

export default theme;