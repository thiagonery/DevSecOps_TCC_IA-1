import styled from '@emotion/styled';

// TODO: Icon repeating

export const StyledSpan = styled('span')<{
  size?: string | number;
  source: string;
}>`
  min-width: ${({ size }) => (size ? size : '18px')};
  min-height: ${({ size }) => (size ? size : '18px')};
  background-image: ${({ source }) => `url(${source})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
