# @trevorblades/mui-theme

[![Build Status](https://travis-ci.com/trevorblades/mui-theme.svg?branch=master)](https://travis-ci.com/trevorblades/mui-theme)

A custom theme for use with the [Material-UI React component library](https://material-ui.com/). This theme uses [Inconsolata](https://fonts.google.com/specimen/Inconsolata) so make sure you import that from Google Fonts in some way.

## Installation

```shell
$ npm install @trevorblades/mui-theme @material-ui/core
```

This theme uses [Inconsolata](https://fonts.google.com/specimen/Inconsolata) as its main font. To make it work, copy the following code into the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:400,700">
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

### createTheme(options)

Merges your provided theme options my defaults. You can use this function to create a variation of this theme.

```js
import {createTheme} from '@trevorblades/mui-theme';

const darkTheme = createTheme({
  palette: {
    type: 'dark'
  }
});
```

### getLinearGradient(position)

Returns a CSS linear gradient definition using the primary palette colour. By default, the gradient moves from the top left to bottom right, but you can pass any valid [`angle` or `side-or-corner`](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) to the `position` argument. This is useful if you're using a CSS-in-JS library like [emotion](https://emotion.sh).

```js
import {css} from 'emotion';
import {getLinearGradient} from '@trevorblades/mui-theme';

const gradientClassName = css({
  height: 24,
  backgroundImage: getLinearGradient('to top left')
});
```

This will create some CSS that looks something like this:

```less
.css-1ds8r9w {
  height: 24px;
  background-image: linear-gradient(to top left, #3f51b5, #1a237e);
}
```
