'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SimulationFormContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 460px;
  @media (min-width: 1880px) {
    margin-right: 150px;
  }
  @media (min-width: 2300px) {
    margin-right: 300px;
  }
  @media( max-width: 1024px){
    position: unset;
    top: unset;
    right: unset;
    max-width: calc(100vw - 40px);
  }
`;
