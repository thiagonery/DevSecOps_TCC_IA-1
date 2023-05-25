import { DRAWER_WIDTH } from '@common/constants';
import { isMobile } from '@common/utils';
import { Box, Drawer } from '@components';
import { useTheme } from '@mui/material';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({
  children,
  drawerFocus,
}) => {
  const theme = useTheme();

  return (
    <Box
      py="24px"
      ml={DRAWER_WIDTH}
      px={isMobile() ? '3%' : '12%'}
      backgroundColor={theme.backgroundColor}
      width={`calc(100vw - ${DRAWER_WIDTH})`}
      minHeight="100vh"
    >
      <>
        <Drawer focus={drawerFocus} />
        {children}
      </>
    </Box>
  );
};
