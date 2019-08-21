const {blue, red} = require('@material-ui/core/colors');
const {createMuiTheme} = require('@material-ui/core/styles');

const headingStyles = {
  fontFamily: ["'Helvetica Neue'", 'Helvetica', 'sans-serif'].toString(),
  fontWeight: 700
};

const themeOptions = {
  palette: {
    primary: blue,
    secondary: red
  },
  typography: {
    fontFamily: ["'Fira Mono'", 'Menlo', 'monospace'].toString(),
    h1: headingStyles,
    h2: headingStyles,
    h3: headingStyles,
    h4: headingStyles,
    h5: headingStyles,
    h6: {
      fontWeight: 400
    },
    overline: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 2
    },
    button: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 6
  }
};

exports.themeOptions = themeOptions;
exports.theme = createMuiTheme(themeOptions);
