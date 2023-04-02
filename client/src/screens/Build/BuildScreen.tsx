import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { Background } from '@components';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTBuild } from '@services/gpt';

export const BuildScreen: React.FC = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');

  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleFetchGPTBuild = () => {
    setStatus('pending');

    fetchGPTBuild(techValue)
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
    <Background drawerFocus="build">
      <Box gap="24px">
        <Text variant="h1" color={theme.palette.primary.main}>
          Etapa - BUILD
        </Text>
        <Text fontSize="22px" color={theme.palette.primary.main}>
          Especifique a tecnologia utilizada na etapa de build.
        </Text>

        <Box flexDirection="row" gap="18px">
          <Input
            value={techValue}
            onChange={(e) => setTechValue(e.target.value)}
            fullWidth
            label="Tecnologia"
          />
        </Box>
        <Button
          text={status === 'pending' ? 'Carregando...' : 'Confirmar'}
          disabled={
            status === 'succeeded' || status === 'pending' || techValue === ''
          }
          onClick={handleFetchGPTBuild}
        />
        <>
          {gptResponse && (
            <>
              <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
                {`Ferramentas de análise de build para "${techValue}" com foco na segurança da aplicação.`}
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
