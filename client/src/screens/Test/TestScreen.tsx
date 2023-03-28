import React from 'react';

import { Background } from '@components';

import { TestContainer } from './components/TestContainer';

export const TestScreen: React.FC = () => (
  <Background drawerFocus="test">
    <TestContainer />
  </Background>
);
