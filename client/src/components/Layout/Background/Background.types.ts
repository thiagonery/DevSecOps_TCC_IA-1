import { DrawerScreens } from '@common/types';

export interface IBackground {
  drawerFocus?: DrawerScreens;
  children: React.ReactElement | React.ReactElement[];
}
