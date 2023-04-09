import Build from '@assets/svgs/build.svg';
import Code from '@assets/svgs/code.svg';
import Deploy from '@assets/svgs/deploy.svg';
import Monitor from '@assets/svgs/monitor.svg';
import Operate from '@assets/svgs/operate.svg';
import Plan from '@assets/svgs/plan.svg';
import Release from '@assets/svgs/release.svg';
import Test from '@assets/svgs/test.svg';
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
        src={Plan}
        shouldFocus={focus === 'plan'}
        label="Plan"
        to="/plan"
      />
      <DrawerItem
        src={Code}
        shouldFocus={focus === 'code'}
        label="Code"
        to="/code"
      />
      <DrawerItem
        src={Build}
        shouldFocus={focus === 'build'}
        label="Build"
        to="/build"
      />
      <DrawerItem
        src={Test}
        shouldFocus={focus === 'test'}
        label="Test"
        to="/test"
      />
      <DrawerItem
        src={Deploy}
        shouldFocus={focus === 'deploy'}
        label="Deploy"
        to="/deploy"
      />
      <DrawerItem
        src={Release}
        shouldFocus={focus === 'release'}
        label="Release"
        to="/release"
      />
      <DrawerItem
        src={Operate}
        shouldFocus={focus === 'operate'}
        label="Operate"
        to="/operate"
      />
      <DrawerItem
        src={Monitor}
        shouldFocus={focus === 'monitor'}
        label="Monitor"
        to="/monitor"
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
