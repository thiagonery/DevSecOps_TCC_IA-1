import { ThemeProvider } from '@mui/material';

import './App.css';
import { Routes } from './routes';
import { defaultTheme } from '@themes/default';

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Routes />
  </ThemeProvider>
);
