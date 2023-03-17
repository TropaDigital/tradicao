'use client';

import styled from 'styled-components';

export const Container = styled.div`
  .title {
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

    ::before {
      content: "| ";
    }
  }
`;
