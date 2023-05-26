import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchDevOpsStep } from '@services/gpt';

export const BuildScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleFetchGPTBuild = () => {
    setStatus('pending');

    fetchDevOpsStep('build', techValue, dataBaseValue)
      .then((res) => {
        setStatus('succeeded');
        setGptResponse(res.data.content);
      })
      .catch(() => setStatus('failed'));
  };
  return (
    <SkeletonLayout
      drawerFocus="build"
      title="Etapa - BUILD"
      subtitle="Construa uma pipeline segura de integração contínua e entrega contínua"
      responseIntro={`Ferramentas de análise de build para "${techValue}" e "${dataBaseValue}" com foco na segurança da aplicação.`}
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
          status === 'succeeded' || status === 'pending' || techValue === ''
        }
        onClick={handleFetchGPTBuild}
      />
    </SkeletonLayout>
  );
};
