import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10px;
  margin-bottom: 800px;
`

export const SkewContainer = styled.div`
  max-height: 434px;
  transform: skew(-18deg);
  width: 890px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
  position: relative;
  left: -80px;

  .skewImage {
    transform: skew(18deg);
    position: relative;
    object-fit: fill;
    right: -80px;
  }
`;

export const SolidBackground = styled.div`
  width: 100%;
  background: linear-gradient(90.03deg, rgba(233, 239, 255, 0) 23.97%, #E9EFFF 91.12%);;
  height: 50%;
  position: absolute;
  top: 0;
`

export const SubTitleWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  height: 74px;
  width: 620px;
  background: linear-gradient(77.17deg, #00D35E -0.7%, #42DB87 93.94%);
  transform: skew(-18deg);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -18px;

  .subtitle {
    font-weight: 700;
    font-size: 24px;
    color: var(--white);
    transform: skew(18deg);
  }
`