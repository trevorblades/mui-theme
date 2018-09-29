const {default: grey} = require('@material-ui/core/colors/blueGrey');
const {default: primary} = require('@material-ui/core/colors/indigo');
const {createMuiTheme} = require('@material-ui/core/styles');

const title = {
  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
  fontWeight: 700
};

const defaultTheme = createMuiTheme();
const display1 = {
  ...title,
  color: defaultTheme.palette.text.primary
};

module.exports = {
  default: createMuiTheme({
    overrides: {
      MuiFormControlLabel: {
        label: {
          lineHeight: 1
        }
      },
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
  }),
  getLinearGradient: (position = 'to bottom right') =>
    `linear-gradient(${[position, primary[500], primary[900]]})`
};
