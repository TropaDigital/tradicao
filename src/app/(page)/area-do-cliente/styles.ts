'use client';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  gap: 80px;

  padding: 60px 0 120px 0;

  @media (max-width: 1260px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    height: 750px;
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
  max-width: 348px;

  color: var(--primary);
  font-size: var(--text-headline-lgx);
  font-weight: 700;
`;

export const AppSubtitleLinks = styled.div`
  max-width: 380px;
  color: var(--gray-600);
  font-size: var(--text-smal-md);
  font-weight: var(--weight-regular);

  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;

      ::before {
        content: '';
        width: 10px;
        height: 10px;
        background: var(--secondary);
        border-radius: 50%;
      }
    }
  }
`;
