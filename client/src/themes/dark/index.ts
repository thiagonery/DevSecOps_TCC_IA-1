import { Shadows, createTheme } from '@mui/material';
import { shadows } from '@mui/system';

import {
  black,
  carbon,
  crimson,
  gray,
  pink,
  purple,
  red,
  white,
} from '../colors';

export const darkTheme = createTheme({
  shadows: Array(shadows.length).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 820,
      lg: 1200,
      xl: 1536,
    },
  },
  backgroundColor: black.main,
  drawerColor: black[300],
  typography: {
    body1: {
      color: white,
      fontFamily: 'Lato',
      fontWeight: '400',
      fontSize: 16,
      letterSpacing: 0.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: '700',
      fontFamily: 'Titillium Web',
      letterSpacing: 1,
    },
    h1: {
      fontFamily: 'Titillium Web',
      fontWeight: '600',
      fontSize: 28,
      color: white,
    },
  },
  palette: {
    primary: {
      300: purple[300],
      main: purple.main,
      500: purple[500],
      600: purple[600],
      700: purple[700],
      800: purple[800],
      900: purple[900],
    },
    secondary: {
      300: pink[300],
      main: pink.main,
      500: pink[500],
      600: pink[600],
      700: pink[700],
      800: pink[800],
      900: pink[900],
    },
    tertiary: {
      300: crimson[300],
      main: crimson.main,
      500: crimson[500],
      600: crimson[600],
      700: crimson[700],
      800: crimson[800],
      900: crimson[900],
    },
    error: {
      300: red[300],
      main: red.main,
      500: red[500],
      600: red[600],
      700: red[700],
      800: red[800],
      900: red[900],
    },
    neutral: {
      300: gray[300],
      main: gray.main,
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
    neutralVariant: {
      300: carbon[300],
      main: carbon.main,
      500: carbon[500],
      600: carbon[600],
      700: carbon[700],
      800: carbon[800],
      900: carbon[900],
    },
  },
});
