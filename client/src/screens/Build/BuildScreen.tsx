import React from 'react';

import { Background, Text } from '@components';
import { useTheme } from '@mui/material';

export const BuildScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Background drawerFocus="build">
      <Text variant="h1" color={theme.palette.primary.main}>
        BUILD
      </Text>
    </Background>
  );
};
