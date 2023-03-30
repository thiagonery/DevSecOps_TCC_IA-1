import React from 'react';

import { Background } from '@components';

import { DeployContainer } from './components/DeployContainer';

export const DeployScreen: React.FC = () => {
  return (
    <Background drawerFocus="deploy">
      <DeployContainer />
    </Background>
  );
};
