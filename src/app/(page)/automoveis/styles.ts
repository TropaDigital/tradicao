'use client';
import styled from 'styled-components';
import SimulationForm from '@/components/shared/SimulationForm';
import { SectionSimulatorForm } from '@/components/shared/SimulationForm/styles';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: 1090px) {
    height: 800px;
  }

  .margin {
    margin-top: 30px;
    margin-bottom: 400px;
  }

  .content-wrapper {
    max-width: 700px;

    @media (max-width: 1250px) {
      max-width: 600px;
    }

    @media (max-width: 1100px) {
      max-width: 550px;
    }

    @media (max-width: 1090px) {
      max-width: unset;
    }
  }
`;

export const SubtitleTop = styled.div`
  font-size: var(--text-smal-xl);
  font-weight: var(--weight-bold);
  color: var(--gray-600);
  max-width: 700px;

  @media (max-width: 1440px) {
    max-width: 600px;
  }

  @media (max-width: 1190px) {
    max-width: 450px;
  }

  @media (max-width: 1090px) {
    max-width: 100%;
  }
`;

export const Spantop = styled.div`
  font-size: var(--text-smal-xs);
  font-weight: var(--weight-regular);
  color: var(--gray-600);
`;

export const StyledSimulationForm = styled(SimulationForm)`
  @media (max-width: 1090px) {
    position: absolute;
    top: 20%;
  }
`;
