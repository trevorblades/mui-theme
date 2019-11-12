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
  },
  overrides: {
    MuiFab: {
      extended: {
        padding: '0 24px'
      },
      label: {
        fontSize: '1rem'
      }
    }
  }
};

exports.themeOptions = themeOptions;
exports.theme = createMuiTheme(themeOptions);

// for use with gatsby-theme-material-ui
exports.webFontsConfig = {
  fonts: {
    google: [
      {
        family: 'Fira Mono',
        variants: ['400', '500', '700']
      }
    ]
  }
};

exports.LogoTitleProps = {
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 36
  },
  logo: {
    height: '1em',
    flexShrink: 0
  },
  title: {
    ml: 'calc(1em / 3)',
    fontSize: '75%',
    lineHeight: 'normal',
    fontFamily: 'h5.fontFamily',
    fontWeight: 'h5.fontWeight'
  }
};
