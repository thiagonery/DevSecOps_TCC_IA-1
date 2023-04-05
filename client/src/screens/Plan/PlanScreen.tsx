import React from 'react';
import { useState } from 'react';

import { DrawerScreens, Status } from '@common/types';
import { Background, SkeletonLayout } from '@components';
import { Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { fetchGPTPlan } from '@services/gpt';

export const PlanScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handlefetchGPTPlan = () => {
    setStatus('pending');

    fetchGPTPlan(techValue, dataBaseValue)
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
      drawerFocus="plan"
      title="Etapa - PLAN"
      subtitle="Comece o planejamento do seu projeto especificando a tecnologia e o
         banco de dados utilizado."
      responseIntro={`Possíveis vulnerabilidades para "${techValue}", com banco de dados "${dataBaseValue}":`}
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
        onClick={handlefetchGPTPlan}
      />
    </SkeletonLayout>
  );
};
