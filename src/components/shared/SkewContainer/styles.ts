import styled from 'styled-components';

type Props = {
  size: 'tiny' | 'medium' | 'large';
};

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10px;
`;

export const SkewContainer = styled.div<Props>`
  max-height: 234px;
  transform: skew(-18deg);
  width: fit-content;
  height: fit-content;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  left: -83px;

  @media (max-width: 850px) {
    border-radius: 30px;
  }
  @media (max-width: 550px) {
    border-radius: 20px;
  }
  @media (max-width: 450px) {
    border-radius: 13px;
  }

  .skewImage {
    transform: skew(18deg);
    position: relative;
    left: 80px;
    object-fit: cover;
  }
`;

export const SolidBackground = styled.div`
  width: 100%;
  background: linear-gradient(
    90.03deg,
    rgba(233, 239, 255, 0) 23.97%,
    #e9efff 91.12%
  );
  height: 50%;
  position: absolute;
  top: 0;
`;
