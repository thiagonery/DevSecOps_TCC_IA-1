import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchGPTBuild } from '@services/gpt';

export const BuildScreen: React.FC = () => {
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
      .catch(() => setStatus('failed'));
  };
  return (
    <SkeletonLayout
      drawerFocus="build"
      title="Etapa - BUILD"
      subtitle="Especifique a tecnologia utilizada na etapa de build."
      responseIntro={`Ferramentas de análise de build para "${techValue}" com foco na segurança da aplicação.`}
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
