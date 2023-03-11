'use client';

import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import { FieldGroup } from '@/components/pages/Painel/components/UiElements/styles';
import HeaderSkew from '@/components/shared/SkewImage/HeaderSkew';
import Steps from '@/components/Steps';
import { useSteps } from '@/hooks/useSteps';
import React, { useCallback, useState } from 'react';

import contato_bg from '../../../public/images/contato_bg.png';
import InfoGeral from './componentSteps/InfoGeral';
import InfoImovel from './componentSteps/InfoImovel';
import InfoServices from './componentSteps/InfoServices';
import InfoTruck from './componentSteps/InfoTruck';
import InfoVehicle from './componentSteps/InfoVehicle';

import { Container, SectionSimulatorForm, TitleSimulator } from './styles';

const styleButtonPlan = {
  height: '40px',
  border: '1px solid #0036C6'
};

export default function Home() {
  const [simulatorPlan, setSimulatorPlan] = useState('parcela');
  const [isSimulator, setSimulator] = useState(false);

  const formComponents = [
    <InfoGeral
      setSimulatorPlan={(value) => setSimulatorPlan(value)}
      simulatorPlan={simulatorPlan}
      styleButtonPlan={styleButtonPlan}
    />,
    <InfoVehicle
      data={[]}
      handleInputChange={(e) => console.log('EVENT', e)}
      handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
    />,
    <InfoImovel
      data={[]}
      handleInputChange={(e) => console.log('EVENT', e)}
      handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
    />,
    <InfoServices
      data={[]}
      handleInputChange={(e) => console.log('EVENT', e)}
      handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
    />,
    <InfoTruck
      data={[]}
      handleInputChange={(e) => console.log('EVENT', e)}
      handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
    />
  ];

  const { changeStep, currentComponent, currentStep, isFirstStep, isLastStep } =
    useSteps(formComponents);

  const handleOnSubmit = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <HeaderSkew
        altBackgroundImage="imagem de fundo"
        backgroundImage={contato_bg}
        heigth={434}
      />

      <SectionSimulatorForm>
        <TitleSimulator>Qual sua próxima conquista?</TitleSimulator>

        <form onSubmit={handleOnSubmit}>
          {!isSimulator && (
            <Steps
              currentStep={currentStep}
              handleOnClick={(value) => changeStep(value)}
            />
          )}

          {isSimulator ? (
            <div>{currentComponent}</div>
          ) : (
            <div>{formComponents[0]}</div>
          )}

          <FieldGroup>
            {isSimulator && (
              <>
                <ButtonDefault
                  color="primaryButton"
                  onClick={() => {
                    setSimulator(!isSimulator);
                    changeStep(1);
                  }}
                >
                  Voltar
                </ButtonDefault>

                <ButtonDefault type="button" color="primaryButton">
                  Avançar
                </ButtonDefault>
              </>
            )}
          </FieldGroup>

          {!isSimulator && (
            <ButtonDefault
              color="primaryButton"
              type="button"
              onClick={() => setSimulator(!isSimulator)}
            >
              Simular
            </ButtonDefault>
          )}
        </form>
      </SectionSimulatorForm>
    </Container>
  );
}
