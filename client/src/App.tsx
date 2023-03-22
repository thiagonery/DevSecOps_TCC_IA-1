import { ThemeProvider } from '@mui/material';

import './App.css';
import { Routes } from './routes';
import { defaultTheme } from './themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};
