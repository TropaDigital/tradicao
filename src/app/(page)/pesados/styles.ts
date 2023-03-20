'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: 1090px) {
    height: 700px;
  }

  .margin {
    margin-top: 30px;
  }
`;

export const SubtitleTop = styled.div`
  font-size: var(--text-smal-xl);
  font-weight: var(--weight-bold);
  color: var(--gray-600);
`;
