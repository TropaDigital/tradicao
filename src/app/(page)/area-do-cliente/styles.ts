'use client';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  gap: 80px;

  padding: 60px 0 120px 0;
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 400px;

  .app-image {
    /* width: 100; */
  }
`;

export const AppLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .flex {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-top: 24px;
  }
`;

export const AppTitleLinks = styled.h1`
  width: 348px;

  color: var(--primary-dark);
  font-size: var(--text-headline-lgx);
  font-weight: var(--weight-bold);
`;

export const AppSubtitleLinks = styled.p`
  max-width: 380px;
  color: var(--gray-600);
  font-size: var(--text-smal-md);
  font-weight: var(--weight-regular);

  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      color: var(--dark);
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
