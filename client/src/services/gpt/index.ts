import { instance } from '@services/axios';


export const fetchGPTPlan = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/plan?technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTCode = (
  technology: string,
  dbms: string,
  feature: string // api/v1/service/test?technology=python&sgbd=postgresql
) =>
  instance({
    url: `/api/v1/service/code?functionality=${feature}&technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTBuild = (technology: string) =>
  instance({ url: `/api/v1/service/build?technology=${technology}` });

export const fetchGPTTest = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/test?technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTDeploy = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/deploy?technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTRelease = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/release?technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTOperate = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/operate?technology=${technology}&sgbd=${dbms}`,
  });

export const fetchGPTMonitor = (technology: string, dbms: string) =>
  instance({
    url: `/api/v1/service/monitor?technology=${technology}&sgbd=${dbms}`,
  });