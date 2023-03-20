import styled from 'styled-components';
interface Props {
  height?: string | number;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10px;
  margin-bottom: 2rem;
`;

export const SkewContainer = styled.div`
  max-height: 434px;
  transform: skew(-18deg);
  width: 965px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
  position: relative;
  left: -138px;

  @media (max-width: 1600px) {
    margin-bottom: 80px;
  }

  @media (max-width: 1090px) {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 500px;
  }

  @media (max-width: 920px) {
    width: 100%;
    transform: skew(0);
    left: 0;
    border-radius: 0;
  }

  .skewImage {
    transform: skew(18deg);
    position: relative;
    object-fit: contain;
    object-position: 80px -180px;
    right: -87px;

    @media (max-width: 920px) {
      right: 0;
      transform: skew(0);
      object-position: 0;
      object-fit: cover;
    }
  }
`;

export const SolidBackground = styled.div<Props>`
  width: 100%;
  background: linear-gradient(
    90.03deg,
    rgba(233, 239, 255, 0) 23.97%,
    #e9efff 91.12%
  );
  height: ${({ height }) => (height ? height : '50%')};
  position: absolute;
  top: 0;
`;

export const SubTitleWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  height: 74px;
  width: 35%;
  background: linear-gradient(77.17deg, #00d35e -0.7%, #42db87 93.94%);
  transform: skew(-18deg);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -18px;

  @media (max-width: 1320px) {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 40%;
  }

  @media (max-width: 1090px) {
    width: 50%;
  }

  @media (max-width: 920px) {
    width: 100%;
    transform: skew(0);
    left: 0;
    border-radius: 0;
  }

  .subtitle {
    font-weight: 700;
    font-size: 24px;
    color: var(--white);
    transform: skew(18deg);

    @media (max-width: 1500px) {
      font-size: 20px;
    }
    @media (max-width: 1090px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 920px) {
      transform: skew(0);
      text-align: center;
    }
  }
`;
