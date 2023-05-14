import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchGPTDeploy } from '@services/gpt';

export const DeployScreen: React.FC = () => {
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
      .catch(() => setStatus('failed'));
  };

  return (
    <SkeletonLayout
      drawerFocus="deploy"
      title="Etapa - DEPLOY"
      subtitle="Implantar sua aplicação com segurança e confiança"
      responseIntro={`Ferramentas de deploy utilizando ${techValue} e ${dataBaseValue}, priorizando a segurança da aplicação:`}
      gptResponse={gptResponse}
      status={status}
    >
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
    </SkeletonLayout>
  );
};
