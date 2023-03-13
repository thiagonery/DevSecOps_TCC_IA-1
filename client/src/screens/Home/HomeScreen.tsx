import React from 'react';

import { Background } from '@components';

import { HomeContainer } from './components/HomeContainer';

export const HomeScreen: React.FC = () => {
  return (
    <Background>
      <HomeContainer />
    </Background>
  );
};
