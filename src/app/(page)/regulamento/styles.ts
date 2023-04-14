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
  height: 0;
  margin-bottom: 18px;
  overflow: hidden;
  padding-bottom: 56.25%;
  padding-top: 30px;
  position: relative;

  object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;
