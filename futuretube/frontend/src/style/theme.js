import { createMuiTheme } from "@material-ui/core";
import 'typeface-roboto';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ef6c00',
      navbarGradient: '#ef7f00',
      secondaryGradient: '#f39c21'
    },
    secondary: {
      main:'#3a3535',
    }
  },
  typography: {
    fontFamily: 'Roboto',
  }
});
