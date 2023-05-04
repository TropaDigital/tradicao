'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: 1090px) {
    height: 800px;
  }

  .margin {
    margin-top: 30px;
  }
`;

export const SubtitleTop = styled.div`
  font-size: var(--text-smal-xl);
  font-weight: var(--weight-bold);
  color: var(--gray-600);
  max-width: 900px;

  @media (max-width: 1630px) {
    max-width: 800px;
  }

  @media (max-width: 1430px) {
    max-width: 700px;
  }

  @media (max-width: 1190px) {
    max-width: 600px;
  }

  @media (max-width: 1090px) {
    max-width: 100%;
  }
`;
