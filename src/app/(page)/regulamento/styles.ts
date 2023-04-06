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
  
  /* @media (max-width: 1400px) {
    height: 440px;
    margin-bottom: 0;
  }

  @media (max-width: 800px) {
    height: 800px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    height: 720px;

    .margin {
      padding-top: 420px;
    }
  }

  @media (max-width: 330px) {
    height: 800px;
    .margin {
      padding-top: 440px;
    }
  } */

`;

export const RegulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    height: fit-content;
    padding-bottom: 60px;

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