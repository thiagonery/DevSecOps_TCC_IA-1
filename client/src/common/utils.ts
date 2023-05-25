import { useMediaQuery, useTheme } from '@mui/material';

export const isMobile = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down('sm'));
};

export const getPrimaryColor = () => {
  const theme = useTheme();

  return theme.palette.primary;
};

export const getSecondaryColor = () => {
  const theme = useTheme();

  return theme.palette.secondary;
};

export const getTertiaryColor = () => {
  const theme = useTheme();

  return theme.palette.tertiary;
};
