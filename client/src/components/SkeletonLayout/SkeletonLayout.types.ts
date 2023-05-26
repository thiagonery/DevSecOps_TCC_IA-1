import { DevOpsSteps, Status } from '@common/types';

export interface ISkeletonLayout {
  drawerFocus: DevOpsSteps;
  title: string;
  subtitle: string;
  responseIntro: string;
  gptResponse: string;
  status: Status;
  children: React.ReactElement | React.ReactElement[];
}
