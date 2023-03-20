import { DRAWER_WIDTH } from '@common/constants';
import { isMobile } from '@common/utils';
import { Box, Drawer } from '@components';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({
  children,
  drawerFocus,
}) => {
  return (
    <Box
      py="24px"
      ml={DRAWER_WIDTH}
      px={isMobile() ? '3%' : '12%'}
      backgroundColor="#eef7f4"
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
