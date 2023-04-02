import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { Background } from '@components';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTPlan } from '@services/gpt';

export const PlanScreen: React.FC = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handlefetchGPTPlan = () => {
    setStatus('pending');

    fetchGPTPlan(techValue, dataBaseValue)
      .then((res) => {
        setStatus('succeeded');
        setGptResponse(res.data.content);
      })
      .catch((err) => {
        setStatus('failed');
        console.log(err.response.data);
      });
  };
  return (
    <Background drawerFocus="plan">
      <Box gap="24px">
        <Text variant="h1" color={theme.palette.primary.main}>
          Etapa - PLAN
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
        <Button
          text={status === 'pending' ? 'Carregando...' : 'Confirmar'}
          disabled={
            status === 'succeeded' ||
            status === 'pending' ||
            inputs.some((input) => input === '')
          }
          onClick={handlefetchGPTPlan}
        />
        <>
          {gptResponse && (
            <>
              <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
                {`Possíveis vulnerabilidades para "${techValue}", com banco de dados "${dataBaseValue}":`}
              </Text>
              <Text fontSize="22px" color={theme.palette.primary.main}>
                {gptResponse}
              </Text>
            </>
          )}
          {status === 'failed' && (
            <Text fontSize="22px" color={theme.palette.primary.main}>
              Falha ao carregar resposta. Por favor, tente novamente mais tarde.
            </Text>
          )}
        </>
      </Box>
    </Background>
  );
};
