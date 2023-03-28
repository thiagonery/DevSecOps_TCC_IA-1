import React from 'react';

import { Background } from '@components';

import { BuildContainer } from './components/BuildContainer';

export const BuildScreen: React.FC = () => (
  <Background drawerFocus="build">
    <BuildContainer />
  </Background>
);
