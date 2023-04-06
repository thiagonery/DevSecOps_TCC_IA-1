import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchGPTMonitor } from '@services/gpt';

export const MonitorScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTMonitor = () => {
    setStatus('pending');

    fetchGPTMonitor(techValue, dataBaseValue)
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
      drawerFocus="monitor"
      title="Etapa - MONITOR"
      subtitle="Especifique as tecnologias na etapa de monitoramento da aplicação."
      responseIntro={`Implantação de SIEM, utilizando "${techValue}" e "${dataBaseValue}":`}
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
        onClick={handleFetchGPTMonitor}
      />
    </SkeletonLayout>
  );
};
