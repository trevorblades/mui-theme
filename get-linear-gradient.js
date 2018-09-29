const theme = require('./');

module.exports = (position = 'to bottom right') =>
  `linear-gradient(${[
    position,
    theme.palette.primary[500],
    theme.palette.primary[900]
  ]})`;
