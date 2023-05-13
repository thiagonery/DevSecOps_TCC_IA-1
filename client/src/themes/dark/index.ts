import { Shadows, createTheme } from '@mui/material';
import { shadows } from '@mui/system';

import {
  black,
  carbon,
  gray,
  lavender,
  orange,
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
  backgroundColor: '#1b1221',
  drawerColor: '#0e0712',
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: orange[500],
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: orange[600],
          },
          label: {
            color: orange.main,
            '&.Mui-focused': {
              color: orange.main,
            },
          },
          input: {
            color: orange.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: orange.main,
          '&:hover': { backgroundColor: orange[600] },
          ':disabled': {
            backgroundColor: gray[300],
          },
        },
      },
    },
  },
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
      300: orange[300],
      main: orange.main,
      500: orange[500],
      600: orange[600],
      700: orange[700],
      800: orange[800],
      900: orange[900],
    },
    tertiary: {
      300: lavender[300],
      main: lavender.main,
      500: lavender[500],
      600: lavender[600],
      700: lavender[700],
      800: lavender[800],
      900: lavender[900],
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
