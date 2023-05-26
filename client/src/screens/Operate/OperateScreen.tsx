import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchGPTOperate } from '@services/gpt';

export const OperateScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTOperate = () => {
    setStatus('pending');

    fetchGPTOperate(techValue, dataBaseValue)
      .then((res) => {
        setStatus('succeeded');
        setGptResponse(res.data.content);
      })
      .catch(() => setStatus('failed'));
  };

  return (
    <SkeletonLayout
      drawerFocus="operate"
      title="Etapa - OPERATE"
      subtitle="Nesta etapa do ciclo de DevSecOps iremos abordar formas seguras de operar o sua aplicação utilizando linguagem de programação e banco de dados do seu projeto."
      responseIntro={`Implantação de ferramentas de monitoramento e analise de logs, utilizando "${techValue}" e "${dataBaseValue}":`}
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
        onClick={handleFetchGPTOperate}
      />
    </SkeletonLayout>
  );
};
