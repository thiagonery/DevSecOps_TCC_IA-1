import { DrawerScreens } from '@common/types';

export interface IDrawer {
  focus?: DrawerScreens;
}

export interface IDrawerItem {
  shouldFocus: boolean;
  label: string;
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  to: string;
}
