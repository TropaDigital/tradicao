import styled from 'styled-components';

type Props = {
  size: 'tiny' | 'medium' | 'large';
};

export const Container = styled.div<Props>`
  max-height: ${({ size = 'medium' }) =>
    size === 'large' ? '434px' : size === 'medium' ? '315px' : '234px'};
  transform: skew(-18deg);
  width: fit-content;
  height: fit-content;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  left: -80px;

  .skewImage {
    transform: skew(18deg);
    position: relative;
    left: 30px;
    object-fit: cover;
  }
`;
