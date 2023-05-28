import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchDevOpsStep } from '@services/gpt';

export const CodeScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTCode = () => {
    setStatus('pending');

    fetchDevOpsStep('code', techValue, dataBaseValue)
      .then((res) => {
        setStatus('succeeded');
        setGptResponse(res.data.content);
      })
      .catch(() => {
        setStatus('failed');
      });
  };

  return (
    <SkeletonLayout
      drawerFocus="code"
      title="Etapa - CODE"
      subtitle="Nesta etapa do ciclo de DevSecOps, abordaremos dicas para a revisão de código, pensando na segurança da sua aplicação, com base na linguagem de programação e banco de dados do seu projeto."
      responseIntro={`Revisão de código utilizando ${techValue} e ${dataBaseValue}, com foco em segurança`}
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
      </Box>
      <Button
        text={status === 'pending' ? 'Carregando...' : 'Confirmar'}
        disabled={
          status === 'succeeded' ||
          status === 'pending' ||
          inputs.some((input) => input === '')
        }
        onClick={handleFetchGPTCode}
      />
    </SkeletonLayout>
  );
};
