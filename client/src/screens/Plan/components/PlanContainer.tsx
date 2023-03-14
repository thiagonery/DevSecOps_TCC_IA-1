import { useState } from 'react';

import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';

export const PlanContainer = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');

  return (
    <Box gap="24px">
      <Text variant="h1" color={theme.palette.primary.main}>
        PLANEJAMENTO
      </Text>
      <Text fontSize="22px" color={theme.palette.primary.main}>
        Comece o planejamento do seu projeto especificando a tecnologia e o
        banco de dados utilizado.
      </Text>

      <Box flexDirection="row" gap="18px">
        <Input
          value={techValue}
          onChange={(e) => setTechValue(e.target.value)}
          fullWidth
          label="Tecnologia"
        />
        <Input
          value={dataBaseValue}
          onChange={(e) => setDataBaseValue(e.target.value)}
          fullWidth
          label="Banco de dados"
        />
      </Box>
      <Button text="Confirmar" />
      <>
        {techValue && dataBaseValue && (
          <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
            {`Possíveis vulnerabilidades para "${techValue}", com banco de dados "${dataBaseValue}":`}
          </Text>
        )}
      </>
    </Box>
  );
};
