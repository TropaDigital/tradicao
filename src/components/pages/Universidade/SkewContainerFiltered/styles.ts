import styled from 'styled-components';

type Props = {
  size: 'tiny' | 'medium' | 'large';
};

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10px;
`;

export const SkewContainer = styled.div`
  max-height: 234px;
  transform: skew(-18deg);
  max-width: 80%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  left: -80px;

  .skewImage {
    width: 100%;
    height: fit-content;
    max-height: 234px;
    transform: skew(18deg);
    position: relative;
    left: 80px;
    object-fit: cover;
  }

  /* &::before {
      content: '';
      background-color: var(--primary);
      background: var(--degrade-primary);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      opacity: 0.7;
  } */

  .logo-mask {
    transform: skewX(18deg);
    position: absolute;
    top: 25%;
    right: 37.5%;
    z-index: 13;
  }

  @media (min-width: 1921px) {
    max-width: 90%;

    .logo-mask {
      right: 44.5%;
    }
  }

  @media (max-width: 1200px) {
    .logo-mask {
      width: 40%;
    }
  }

  @media (max-width: 850px) {
    border-radius: 30px;
  }

  @media (max-width: 500px) {
    border-radius: 0;
    max-width: 100vw;
    width: 100vw;
    left: 0;
    transform: skewX(0);

    .skewImage {
      transform: skew(0);
      left: 0;
    }

    .logo-mask {
      transform: skewX(0);
    }
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
