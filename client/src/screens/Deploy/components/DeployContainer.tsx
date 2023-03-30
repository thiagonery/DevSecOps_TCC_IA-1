import { useState } from 'react';

import { Status } from '@common/types';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTDeploy } from '@services/gpt';

export const DeployContainer = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTDeploy = () => {
    setStatus('pending');

    fetchGPTDeploy(techValue, dataBaseValue)
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
    <Box gap="24px">
      <Text variant="h1" color={theme.palette.primary.main}>
        ETAPA DE IMPLANTAÇÃO (DEPLOY)
      </Text>
      <Text fontSize="22px" color={theme.palette.primary.main}>
        Ferramentas de implantação com suporte para suas tecnologias.
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
        onClick={handleFetchGPTDeploy}
      />
      <>
        {gptResponse && (
          <>
            <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
              {`Ferramentas de deploy para utilizando ${techValue} e ${dataBaseValue}, priorizando segurança:`}
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
  );
};
