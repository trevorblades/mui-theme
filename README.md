# @trevorblades/mui-theme

[![Build Status](https://travis-ci.com/trevorblades/mui-theme.svg?branch=master)](https://travis-ci.com/trevorblades/mui-theme)

A custom theme for use with [Material-UI](https://material-ui.com/).

## Installation

```bash
npm install @trevorblades/mui-theme @material-ui/core
```

This package should be used with `@material-ui/core` version 4 or newer, so make sure you have that installed. It also uses uses [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) as its main body font. To make this font work in your website, add the following code into the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap">
```

## Usage

```js
import {MuiThemeProvider, Typography} from '@material-ui/core';
import {theme} from '@trevorblades/mui-theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Typography variant="headline">Hello world!</Typography>
  </MuiThemeProvider>,
  document.getElementById('root')
);
```

## Extending this theme

If you want to add or change properties of this theme, you can use the `themeOptions` export instead of `theme`, and compose your own theme.

```js
// custom-theme.js
import {createMuiTheme} from '@material-ui/core';
import {themeOptions} from '@trevorblades/mui-theme';

export const theme = createMuiTheme({
  ...themeOptions,
  overrides: {
    // custom overrides here
  }
});
```
