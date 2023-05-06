import SafeeLogo from '@assets/images/safee-logo-min.png';
import { ReactComponent as Build } from '@assets/svgs/build.svg';
import { ReactComponent as Code } from '@assets/svgs/code.svg';
import { ReactComponent as Deploy } from '@assets/svgs/deploy.svg';
import { ReactComponent as Monitor } from '@assets/svgs/monitor.svg';
import { ReactComponent as Operate } from '@assets/svgs/operate.svg';
import { ReactComponent as Plan } from '@assets/svgs/plan.svg';
import { ReactComponent as Release } from '@assets/svgs/release.svg';
import { ReactComponent as Test } from '@assets/svgs/test.svg';
import { DRAWER_WIDTH } from '@common/constants';
import { getSecondaryColor, isMobile } from '@common/utils';
import { Box, Link, Text } from '@components';
import { Drawer as MuiDrawer, useTheme } from '@mui/material';
import { black } from '@themes/colors';

import { IDrawer, IDrawerItem } from './Drawer.types';

export const Drawer: React.FC<IDrawer> = ({ focus }) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      PaperProps={{
        sx: {
          ...paperStyles(),
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
      <Box style={{ alignItems: 'center' }} px="6px" mb="44px">
        <img src={SafeeLogo} width="42px" height="42px" />
      </Box>
      <DrawerItem
        icon={<Plan width="24px" height="24px" />}
        shouldFocus={focus === 'plan'}
        label="Plan"
        to="/plan"
      />
      <DrawerItem
        icon={<Code width="24px" height="24px" />}
        shouldFocus={focus === 'code'}
        label="Code"
        to="/code"
      />
      <DrawerItem
        icon={<Build width="24px" height="24px" />}
        shouldFocus={focus === 'build'}
        label="Build"
        to="/build"
      />
      <DrawerItem
        icon={<Test width="24px" height="24px" />}
        shouldFocus={focus === 'test'}
        label="Test"
        to="/test"
      />
      <DrawerItem
        icon={<Deploy width="24px" height="24px" />}
        shouldFocus={focus === 'deploy'}
        label="Deploy"
        to="/deploy"
      />
      <DrawerItem
        icon={<Release width="24px" height="24px" />}
        shouldFocus={focus === 'release'}
        label="Release"
        to="/release"
      />
      <DrawerItem
        icon={<Operate width="24px" height="24px" />}
        shouldFocus={focus === 'operate'}
        label="Operate"
        to="/operate"
      />
      <DrawerItem
        icon={<Monitor width="24px" height="24px" />}
        shouldFocus={focus === 'monitor'}
        label="Monitor"
        to="/monitor"
      />
    </MuiDrawer>
  );
};

const DrawerItem: React.FC<IDrawerItem> = ({
  icon,
  label,
  shouldFocus,
  to,
}) => {
  return (
    <Link to={to}>
      <Box gap="4px" style={{ alignItems: 'center' }}>
        <Box
          style={{ alignItems: 'center' }}
          borderRadius="100px"
          px="16px"
          py="4px"
        >
          {icon}
        </Box>
        <Text
          color={shouldFocus ? getSecondaryColor()[600] : black.main}
          fontWeight="700"
          fontFamily="Titillium Web"
          fontSize="12px"
        >
          {label}
        </Text>
      </Box>
    </Link>
  );
};

const paperStyles = () => {
  const theme = useTheme();

  return {
    width: DRAWER_WIDTH,
    pt: '44px',
    border: 'none',
    gap: '8px',
    backgroundColor: theme.drawerColor,
  };
};
