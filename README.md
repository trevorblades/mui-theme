# @trevorblades/mui-theme

[![CircleCI](https://circleci.com/gh/trevorblades/mui-theme.svg?style=shield)](https://circleci.com/gh/trevorblades/mui-theme)

A custom theme for use with the [Material-UI React component library](https://material-ui.com/). This theme uses [Inconsolata](https://fonts.google.com/specimen/Inconsolata) so make sure you import that from Google Fonts in some way.

## Installation

```
npm install @trevorblades/mui-theme @material-ui/core
```

## Usage

```js
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '@trevorblades/mui-theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Typography variant="headline">Hello world!</Typography>
  </MuiThemeProvider>
);
```