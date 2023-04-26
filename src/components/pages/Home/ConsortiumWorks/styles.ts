'use client';
import styled from 'styled-components';

export const ConsortiumContainer = styled.div`
  margin-bottom: 50px;
`;

export const ConsortiumTitle = styled.h1`
  text-align: center;
  font-size: var(--text-headline-lgx);
  font-weight: var(--weight-bold);
  color: var(--primary-dark);

  margin-bottom: 42px;
`;

export const ConsortiumTimeLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 66px 1fr;
  min-height: 548px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TimeLineInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 108px;

  &.left {
    margin-top: 100px;
  }

  /* @media (max-width: 1200px) {
        padding: 0 20px;
    } */
`;

export const TimeLineCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 8px;
  height: 497px;

  background-color: #b9bfcd;

  margin-left: 29px;
  margin-right: 29px;
  margin-top: 29px;

  .circle {
    width: 26px;
    height: 26px;
    background: var(--primary-light);
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    height: 510px;
    align-items: center;

    .circle {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 375px) {
    height: 650px;
  }
`;

export const InfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoText = styled.div`
  width: 100%;
  height: 80px;

  @media (max-width: 375px) {
    margin-bottom: 25px;
  }

  .info-title {
    text-align: end;
    font-size: var(--text-smal-md);
    font-weight: var(--weight-bold);
    color: var(--primary-mid);
    padding-bottom: 4px;

    &.left {
      text-align: left;
    }
  }

  .description {
    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
    color: var(--primary-mid);

    &.left {
      text-align: left;
    }

    &.right {
      text-align: right;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 90%;

    .info-title {
      font-size: var(--text-smal-sm);
    }

    .description {
      font-size: var(--text-smal-sm);
    }
  }
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-width: 80px;
  height: 80px;
  min-height: 80px;
  border-radius: 10px;
  background-color: var(--primary);
  background: var(--degrade-primary);

  svg {
    width: 48px;
    height: 48px;

    path {
      fill: var(--white);
    }
  }

  @media (max-width: 800px) {
    width: 48px;
    height: 48px;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 500px) {
    width: 36px;
    height: 36px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ConsortiumTimeLineSmall = styled.div`
  display: flex;

  height: fit-content;

  @media (min-width: 501px) {
    display: none;
  }
`;

export const TimeLineRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
