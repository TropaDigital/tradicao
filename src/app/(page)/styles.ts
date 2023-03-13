'use client'

import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const SectionSimulatorForm = styled.div`
  width: 100%;
  max-width: 460px;
  height: 428px;
  
  padding: 32px 20px;
  margin: 0 auto;

  background: #FFFFFF;
  box-shadow: 0px 20px 30px -14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%,-12%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    fieldset {
      .isSubInfo {
        display: flex; 
        align-items: center; 
        gap: 10px; 
        justify-content: center;

        >h2 {
          font-size: 24px;
          font-weight: 700;
        }
      }

      legend {
        display: block;
        margin-bottom: 16px;
        h2 {
          font-size: var(--text-smal-sm);
          font-weight: var(--weight-bold);
          text-align: center;
          color: #0036C6;
        }
      }
      
      >strong {
        text-align: center;
        display: block;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
        margin: 12px 0;
        color: #152347;
      }

      aside {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: 2rem;

        h3 {
          font-size: var(--text-headline-lgx);
          font-weight: var(--weight-bold);
          font-weight: 700;
          font-size: 40px;
          line-height: 46px;
          letter-spacing: -0.02em;

          color: var(--primary);
        }

        span {
          font-weight: var(--weight-regular);
          font-size: var(--text-smal-sm);
          line-height: 18px;
          color: var(--gray-600);
        }
      }

    }
  }
`;

export const TitleSimulator = styled.div`
  font-size: var(--text-headline-sm);
  font-weight: var(--weight-bold);
  text-align: center;

  color: var(--primary-dark);
`;

export const ContentSimulation = styled.fieldset`

  animation: ${appearFromRight} .35s ease;
`