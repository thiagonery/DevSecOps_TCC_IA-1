import { DevOpsSteps } from '@common/types';

export interface IBackground {
  drawerFocus?: DevOpsSteps;
  children: React.ReactElement | React.ReactElement[];
}
