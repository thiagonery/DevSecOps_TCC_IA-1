import React from 'react';

import { Background } from '@components';

import { PlanContainer } from './components/PlanContainer';

export const PlanScreen: React.FC = () => {
  return (
    <Background drawerFocus="plan">
      <PlanContainer />
    </Background>
  );
};
