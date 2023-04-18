import { getPrimaryColor } from '@common/utils';

import { Background } from '../Layout/Background';
import { Box } from '../Layout/Box';
import { Text } from '../Text';
import { ISkeletonLayout } from './SkeletonLayout.types';

export const SkeletonLayout: React.FC<ISkeletonLayout> = ({
  drawerFocus,
  title,
  subtitle,
  responseIntro,
  gptResponse,
  status,
  children,
}) => {
  return (
    <Background drawerFocus={drawerFocus}>
      <Box gap="24px">
        <Text variant="h1" color={getPrimaryColor().main}>
          {title}
        </Text>
        <Text fontSize="22px" color={getPrimaryColor().main}>
          {subtitle}
        </Text>
        <>
          {children}
          {gptResponse && (
            <>
              <Text fontSize="18" fontWeight="600" fontFamily="Titillium Web">
                {responseIntro}
              </Text>
              <Text fontSize="22px" color={getPrimaryColor().main}>
                {gptResponse}
              </Text>
            </>
          )}
          {status === 'failed' && (
            <Text fontSize="22px" color={getPrimaryColor().main}>
              Falha ao carregar resposta. Por favor, tente novamente mais tarde.
            </Text>
          )}
        </>
      </Box>
    </Background>
  );
};
