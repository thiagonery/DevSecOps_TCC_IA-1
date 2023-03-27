type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type DrawerScreens = 'plan' | 'code' | 'build';

export type Status = 'idle' | 'pending' | 'succeeded' | 'failed';
