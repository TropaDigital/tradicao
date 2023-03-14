import styled from 'styled-components';

type Props = {
  size: 'tiny' | 'medium' | 'large';
};

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10px;
`

export const SkewContainer = styled.div<Props>`
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
    left: ${({ size = "medium" }) => size === "medium" ? "80px" : size === "tiny" ? "30px" : ""};
    object-fit: cover;
  }
`;

export const SolidBackground = styled.div`
  width: 100%;
  background: linear-gradient(90.03deg, rgba(233, 239, 255, 0) 23.97%, #E9EFFF 91.12%);;
  height: 50%;
  position: absolute;
  top: 0;
`
