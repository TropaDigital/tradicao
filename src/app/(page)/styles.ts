'use client'

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SectionSimulatorForm = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 40px 20px;

  margin: 0 auto;

  background: #FFFFFF;
  box-shadow: 0px 20px 30px -14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%,-12%);

  form {
    /* margin: 20px; */

    fieldset {

      legend {
        display: block;
  
        h2 {
          font-size: var(--text-smal-sm);
          font-weight: var(--weight-bold);
          text-align: center;
          color: #0036C6;
        }
      }
      
      strong {
        text-align: center;
        display: block;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
        margin: 12px 0;
        color: #152347;
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

