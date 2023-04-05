import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchGPTCode } from '@services/gpt';

export const CodeScreen: React.FC = () => {
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
    <SkeletonLayout
      drawerFocus="code"
      title="Etapa - CODE"
      subtitle="Especifique a funcionalidade e suas tecnologias na etapa de
      codificação."
      responseIntro={`Revisão de código para a funcionalidade "${featureValue}", utilizando ${techValue} e ${dataBaseValue}, com foco em segurança`}
      gptResponse={gptResponse}
      status={status}
    >
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
    </SkeletonLayout>
  );
};
