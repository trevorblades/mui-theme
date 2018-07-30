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
import theme from '@trevorblades/mui-theme';
import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Typography variant="headline">Hello world!</Typography>
  </MuiThemeProvider>
);
```

### getLinearGradient(position)

Returns a CSS linear gradient definition using the primary palette colour. By default, the gradient moves from the top left to bottom right, but you can pass any valid [`angle` or `side-or-corner`](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) argument.

```js
import {getLinearGradient} from '@trevorblades/mui-theme';

getLinearGradient();
```

This will produce the following output:

```less
linear-gradient(to bottom right, #3f51b5, #1a237e)
```
