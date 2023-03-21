'use client';
import styled from 'styled-components';

export const BlueContainer = styled.div`
  width: 100%;
  height: 153px;
  margin-bottom: 50px;

  overflow-x: hidden;

  position: relative;
`;

export const BlueLeft = styled.div`
  width: 52%;
  height: 142px;
  background: var(--primary);
  background: var(--degrade-primary);
  transform: skewX(-18deg);
  position: absolute;
  top: 11px;
  left: -25px;
  border-bottom-right-radius: 20px;

  padding: 20px 120px 39px 0px;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 52%;

    padding: 20px 110px 40px 20px;
  }

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    width: 60%;

    padding: 20px 64px 44px 30px;
  }
`;

export const BlueRight = styled.div`
  width: 55%;
  height: 142px;
  background: var(--primary);
  background: linear-gradient(77.17deg, #0036c6 -0.7%, #3e65d0 99.14%);
  transform: skewX(162deg);
  z-index: 9;
  position: absolute;
  top: 0;
  right: -25px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  padding: 20px 0px 38px 60px;

  @media (min-width: 2700px) {
    width: 50%;
  }

  @media (min-width: 2000px) {
    width: 53%;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;

    width: 62%;

    padding: 20px 0px 20px 40px;
  }

  @media (max-width: 500px) {
    display: flex;
    align-items: center;

    width: 62%;

    padding: 20px 0px 20px 30px;
  }
`;

export const BlueLeftInfo = styled.div`
  text-align: right;
  font-size: var(--text-display-lg);
  font-weight: var(--weight-bold);
  color: var(--white);
  transform: skewX(18deg);

  .title {
    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
  }

  @media (max-width: 800px) {
    font-size: var(--text-headline-lgx);
  }

  @media (max-width: 500px) {
    font-size: var(--text-headline-sm);
  }
`;

export const BlueRightInfo = styled.div`
  text-align: left;
  font-size: var(--text-display-lg);
  font-weight: var(--weight-bold);
  color: var(--white);
  transform: skewX(18deg);

  span {
    font-size: 1.375rem;
  }

  .title {
    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
  }

  @media (max-width: 800px) {
    font-size: var(--text-headline-lgx);
  }

  @media (max-width: 500px) {
    font-size: var(--text-headline-sm);
  }
`;
