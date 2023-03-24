import { instance } from '@services/axios';

export const fetchGPTPlan = (technology: string, dbms: string) =>
  instance({
    url: `api/v1/service/plan?technology=${technology}&sgbd=${dbms}`,
  });
