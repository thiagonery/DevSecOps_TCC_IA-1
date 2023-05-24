type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type DevOpsSteps =
  | 'plan'
  | 'code'
  | 'build'
  | 'test'
  | 'deploy'
  | 'release'
  | 'operate'
  | 'monitor';

export type Status = 'idle' | 'pending' | 'succeeded' | 'failed';
