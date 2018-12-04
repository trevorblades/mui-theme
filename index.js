const {default: grey} = require('@material-ui/core/colors/blueGrey');
const {default: primary} = require('@material-ui/core/colors/indigo');
const {createMuiTheme} = require('@material-ui/core/styles');
const merge = require('lodash/fp/merge');

const heading = {
  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
  fontWeight: 700
};

const defaults = {
  overrides: {
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: 28
      }
    },
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
    useNextVariants: true,
    fontFamily: 'Inconsolata, monospace',
    fontSize: 16,
    fontWeightMedium: 700,
    h1: heading,
    h2: heading,
    h3: heading,
    h4: heading,
    h5: heading,
    h6: heading
  }
};

const mergeDefaults = merge(defaults);
function createTheme(options = {}) {
  return createMuiTheme(mergeDefaults(options));
}

module.exports = createTheme();
module.exports.createTheme = createTheme;
module.exports.getLinearGradient = (position = 'to bottom right') =>
  `linear-gradient(${[position, primary[500], primary[900]]})`;
