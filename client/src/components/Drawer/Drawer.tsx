import HomeFocused from '@assets/icons/home--focused.png';
import HomeNotFocused from '@assets/icons/home--not-focused.png';
import { DRAWER_WIDTH } from '@common/constants';
import { isMobile } from '@common/utils';
import { Box, Icon, Link, Text } from '@components';
import { Drawer as MuiDrawer, useTheme } from '@mui/material';

import { IDrawer, IDrawerItem } from './Drawer.types';

export const Drawer: React.FC<IDrawer> = ({ focus }) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      PaperProps={{
        sx: {
          ...PAPER_STYLES,
          [theme.breakpoints.down('sm')]: {
            gap: 0,
            py: '4px',
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
        },
      }}
      anchor={isMobile() ? 'bottom' : 'left'}
      variant="permanent"
    >
      <DrawerItem
        src={focus === 'plan' ? HomeFocused : HomeNotFocused}
        shouldFocus={focus === 'plan'}
        label="Planejamento"
        to="/plan"
      />
      <DrawerItem
        src={focus === 'code' ? HomeFocused : HomeNotFocused}
        shouldFocus={focus === 'code'}
        label="Code"
        to="/code"
      />
      <DrawerItem
        src={focus === 'build' ? HomeFocused : HomeNotFocused}
        shouldFocus={focus === 'build'}
        label="Build"
        to="/build"
      />
      <DrawerItem
        src={focus === 'test' ? HomeFocused : HomeNotFocused}
        shouldFocus={focus === 'test'}
        label="Test"
        to="/test"
      />
    </MuiDrawer>
  );
};

const DrawerItem: React.FC<IDrawerItem> = ({ src, label, shouldFocus, to }) => {
  const theme = useTheme();

  return (
    <Link to={to}>
      <Box gap="4px" style={{ alignItems: 'center' }}>
        <Box
          style={{ alignItems: 'center' }}
          borderRadius="100px"
          px="16px"
          py="4px"
          backgroundColor={
            shouldFocus ? theme.palette.tertiary[900] : '#eef7f4'
          }
        >
          <Icon size="24px" src={src} />
        </Box>
        <Text fontWeight="700" fontSize="12px">
          {label}
        </Text>
      </Box>
    </Link>
  );
};

const PAPER_STYLES = {
  width: DRAWER_WIDTH,
  pt: '44px',
  border: 'none',
  gap: '8px',
  backgroundColor: '#eef7f4',
};
