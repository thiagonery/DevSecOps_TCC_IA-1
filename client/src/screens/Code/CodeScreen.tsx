import React from 'react';

import { Background } from '@components';

import { CodeContainer } from './components/CodeContainer';

export const CodeScreen: React.FC = () => {
  return (
    <Background drawerFocus="code">
      <CodeContainer />
    </Background>
  );
};
