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

    fetchGPTBuild(techValue, dataBaseValue)
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
      subtitle="Nesta etapa do ciclo do DevSecOps, forneceremos sugestões de analise de build pensando em segurança de aplicação e como implementa-los utilizando a linguagem de programação e banco de dados do seu projeto."
      responseIntro={` Me de sugestões de ferramentas e processos de analise de build para ${techValue} com ${dataBaseValue} pensando em segurança de aplicação e como implementa-los`}
      gptResponse={gptResponse}
      status={status}
    >
      <Box flexDirection="row" gap="18px">
        <Input
          value={techValue}
          onChange={(e) => setTechValue(e.target.value)}
          fullWidth
          label="Linguagem de programação"
        />
        <Input
          value={dataBaseValue}
          onChange={(e) => setDataBaseValue(e.target.value)}
          fullWidth
          label="Banco de dados"
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
