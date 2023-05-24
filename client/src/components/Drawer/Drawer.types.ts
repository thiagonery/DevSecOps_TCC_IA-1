import { DevOpsSteps } from '@common/types';

export interface IDrawer {
  focus?: DevOpsSteps;
}

export interface IDrawerItem {
  shouldFocus: boolean;
  label: string;
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  to: string;
}
