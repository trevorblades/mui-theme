import {default as grey} from '@material-ui/core/colors/blueGrey';
import {default as primary} from '@material-ui/core/colors/indigo';
import {createMuiTheme} from '@material-ui/core/styles';

const title = {
  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
  fontWeight: 700
};

const defaultTheme = createMuiTheme();
const display1 = {
  ...title,
  color: defaultTheme.palette.text.primary
};

const gradient = [primary[500], primary[900]].toString();
export function getLinearGradient(position) {
  return `linear-gradient(${position}, ${gradient})`;
}

export default createMuiTheme({
  overrides: {
    MuiPickersDay: {
      day: {
        fontWeight: 400
      }
    }
  },
  palette: {
    primary,
    grey
  },
  typography: {
    fontFamily: "'Inconsolata', monospace",
    fontSize: 16,
    fontWeightMedium: 700,
    title,
    headline: title,
    display1,
    display2: display1,
    display3: display1
  }
});
