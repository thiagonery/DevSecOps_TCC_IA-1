import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { Background } from '@components';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTOperate } from '@services/gpt';

export const OperateScreen: React.FC = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');

  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTOperate = () => {
    setStatus('pending');

    fetchGPTOperate(techValue, dataBaseValue)
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
    <Background drawerFocus="operate">
      <Box gap="24px">
        <Text variant="h1" color={theme.palette.primary.main}>
          ETAPA DE OPERAÇÃO (OPERATE)
        </Text>
        <Text fontSize="22px" color={theme.palette.primary.main}>
          Especifique a funcionalidade e suas tecnologias na etapa de operação
          da aplicação.
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
          onClick={handleFetchGPTOperate}
        />
        <>
          {gptResponse && (
            <>
              <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
                {`Planejamento de um pentest para uma aplicação utilizando "${techValue}" e "${dataBaseValue}":`}
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
