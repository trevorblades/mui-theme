const {default: grey} = require('@material-ui/core/colors/blueGrey');
const {default: primary} = require('@material-ui/core/colors/indigo');
const {createMuiTheme} = require('@material-ui/core/styles');
const merge = require('lodash/merge');

const heading = {
  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
  fontWeight: 700
};

const config = {
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

function generateThemeCreator(defaults = {}) {
  return function createTheme(options = {}) {
    const merged = merge({}, config, defaults, options);
    const theme = createMuiTheme(merged);

    theme.mixins.linearGradient = function(
      position = '135deg',
      color = 'primary'
    ) {
      const {light, dark} = theme.palette[color];
      return `linear-gradient(${[position, light, dark]})`;
    };

    return theme;
  };
}

const createTheme = generateThemeCreator();

exports.__esModule = true;
exports.default = createTheme();
exports.createTheme = createTheme;
exports.generateThemeCreator = generateThemeCreator;
