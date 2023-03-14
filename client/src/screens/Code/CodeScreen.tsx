import React from 'react';

import { Background, Text } from '@components';
import { useTheme } from '@mui/material';

export const CodeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Background drawerFocus="code">
      <Text variant="h1" color={theme.palette.primary.main}>
        CODE
      </Text>
    </Background>
  );
};
