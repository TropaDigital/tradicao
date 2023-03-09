import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  transform: skew(-18deg);
  border-radius: 60px;
  overflow: hidden;
  position: absolute;
  left: -345px;

  .imageWrapper {
    transform: skew(18deg);
    position: absolute;
    right: -55px;
    scale: 1.1;
  }
`;
