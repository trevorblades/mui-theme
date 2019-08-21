# @trevorblades/mui-theme

[![Build Status](https://travis-ci.com/trevorblades/mui-theme.svg?branch=master)](https://travis-ci.com/trevorblades/mui-theme)

A custom theme for use with the [Material-UI React component library](https://material-ui.com/).

## Installation

```bash
npm install @trevorblades/mui-theme @material-ui/core
```

This package assumes you're using `@material-ui/core` version 4 or newer. It also uses uses [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) as its main body font. To make this work in your website, add the following code into the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap">
```

## Usage

```js
import Typography from '@material-ui/core/Typography';
import theme from '@trevorblades/mui-theme';
import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Typography variant="headline">Hello world!</Typography>
  </MuiThemeProvider>,
  document.getElementById('root')
);
```
