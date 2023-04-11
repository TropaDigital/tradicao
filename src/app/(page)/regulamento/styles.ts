'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: fit-content;
  position: relative;

  margin-bottom: 30px;

  .margin {
    margin-top: 30px;
    position: relative;
  }  
  
`;

export const RegulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    height: fit-content;
    padding-bottom: 60px;

    p {
      color: var(--gray-600);
    }

    .big-space {
        margin-bottom: 48px;
    }

    .mid-space {
        margin-bottom: 24px;
    }

    .small-space {
        margin-bottom: 12px;
    }
`