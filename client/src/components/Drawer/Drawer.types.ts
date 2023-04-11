import { DrawerScreens } from '@common/types';

export interface IDrawer {
  focus?: DrawerScreens;
}

export interface IDrawerItem {
  shouldFocus: boolean;
  label: string;
  icon: React.ReactElement;
  to: string;
}
