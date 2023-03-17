'use client';

import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--primary-dark);
    margin-bottom: var(--normal-font-size);

    @media(max-width: 620px) {
      font-size: var(--h2-font-size);
    }
    @media(max-width: 365px) {
      font-size: var(--h3-font-size);
    }
  }

  h3 {
    font-weight: var(--font-medium);
    color: var(--gray-500);
    font-size: var(--text-smal-md);
  }
`;
