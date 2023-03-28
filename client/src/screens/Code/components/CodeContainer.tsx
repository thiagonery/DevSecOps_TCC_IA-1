import { useState } from 'react';

import { Status } from '@common/types';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTCode } from '@services/gpt';

export const CodeContainer = () => {
  const theme = useTheme();
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [featureValue, setFeatureValue] = useState('');

  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue, featureValue];

  const handleFetchGPTPlan = () => {
    setStatus('pending');

    fetchGPTCode(techValue, dataBaseValue, featureValue)
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
        ETAPA DE CODIFICAÇÃO (CODE)
      </Text>
      <Text fontSize="22px" color={theme.palette.primary.main}>
        Especifique a funcionalidade e suas tecnologias na etapa de codificação.
      </Text>

      <Box flexDirection="row" gap="18px">
        <Input
          value={featureValue}
          onChange={(e) => setFeatureValue(e.target.value)}
          fullWidth
          label="Funcionalidade"
        />
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
        onClick={handleFetchGPTPlan}
      />
      <>
        {gptResponse && (
          <>
            <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
              {`Revisão de código para a funcionalidade "${featureValue}", utilizando ${techValue} e ${dataBaseValue}, com foco em segurança`}
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
