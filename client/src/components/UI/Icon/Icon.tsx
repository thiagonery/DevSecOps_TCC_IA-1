import { StyledSpan } from './Icon.styles';
import { IIcon } from './Icon.types';

export const Icon: React.FC<IIcon> = ({ size, src }) => (
  <StyledSpan size={size} source={src} />
);
