import { DevOpsSteps } from '@common/types';
import { instance } from '@services/axios';

export const fetchDevOpsStep = (
  step: DevOpsSteps,
  technology: string,
  dbms: string
) =>
  instance({
    url: `/api/v1/service/${step}?technology=${technology}&sgbd=${dbms}`,
  });
