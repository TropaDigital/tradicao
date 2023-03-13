'use client';
import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import { FieldGroup } from '@/components/pages/Painel/components/UiElements/styles';
import HeaderSkew from '@/components/shared/HeaderSkew';
import Steps from '@/components/Steps';
import { useSteps } from '@/hooks/useSteps';
import React, { useCallback, useState } from 'react';

import contato_bg from '../../../public/images/contato_bg.png';
import InfoGeral from './componentSteps/InfoGeral';
import { ConfirmImovel, InfoImovel } from './componentSteps/InfoImovel';
import { ConfirmService, InfoService } from './componentSteps/InfoServices';
import { ConfirmTruck, InfoTruck } from './componentSteps/InfoTruck';
import { ConfirmVehicle, InfoVehicle } from './componentSteps/InfoVehicle';

import { Container, SectionSimulatorForm, TitleSimulator } from './styles';

const styleButtonPlan = {
  height: '40px',
  border: '1px solid #0036C6'
};

export default function Home() {
  const [simulatorPlan, setSimulatorPlan] = useState('parcela');
  const [isSimulator, setSimulator] = useState(false);
  const [selectStep, setSelectStep] = useState('carComponents');

  const newComponents = [
    {
      name: 'homeComponents',
      componet: [
        <InfoGeral
          setSimulatorPlan={(value) => setSimulatorPlan(value)}
          simulatorPlan={simulatorPlan}
          styleButtonPlan={styleButtonPlan}
        />
      ]
    },
    {
      name: 'carComponents',
      componet: [
        <InfoVehicle
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />,
        <ConfirmVehicle
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />
      ]
    },
    {
      name: 'imovelComponents',
      componet: [
        <InfoImovel
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />,
        <ConfirmImovel
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />
      ]
    },
    {
      name: 'serviceComponents',
      componet: [
        <InfoService
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />,
        <ConfirmService
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />
      ]
    },
    {
      name: 'truckComponents',
      componet: [
        <InfoTruck
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />,
        <ConfirmTruck
          data={[]}
          handleInputChange={(e) => console.log('EVENT', e)}
          handleOnChangeCheckbox={(e) => console.log('EVENT', e)}
        />
      ]
    }
  ];

  const fillComponents = newComponents.filter(
    (row: any) => row.name === selectStep
  )[0].componet;

  const { changeStep, currentStep } = useSteps(newComponents, 1);
  const {
    changeStep: subChangeStep,
    currentComponent: subCurrentComponent,
    currentStep: subCurrentStep,
    isFirstStep: subIsFirstStep,
    isLastStep: subIsLastStep
  } = useSteps(fillComponents, 0);

  const changeStepComp = (name: string, value: any) => {
    changeStep(value);
    setSelectStep(name);
  };

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
        {!isSimulator && (
          <TitleSimulator>Qual sua próxima conquista?</TitleSimulator>
        )}

        <form onSubmit={handleOnSubmit}>
          {!isSimulator && (
            <Steps
              currentStep={currentStep}
              handleOnClick={(name, step) => changeStepComp(name, step)}
            />
          )}

          {isSimulator ? (
            <div>{subCurrentComponent}</div>
          ) : (
            <div>{newComponents[0].componet}</div>
          )}

          <FieldGroup>
            {isSimulator && (
              <>
                <ButtonDefault
                  color="primaryButton"
                  onClick={() => {
                    if (subCurrentStep === 0) {
                      changeStep(1);
                      setSimulator(!isSimulator);
                      subChangeStep(subCurrentStep - 1);
                    }
                    subChangeStep(subCurrentStep - 1);
                  }}
                >
                  Voltar
                </ButtonDefault>

                {!subIsLastStep ? (
                  <ButtonDefault
                    type="button"
                    color="primaryButton"
                    onClick={() => subChangeStep(subCurrentStep + 1)}
                  >
                    Avançar
                  </ButtonDefault>
                ) : (
                  <ButtonDefault
                    color="primaryButton"
                    type="button"
                    onClick={() => console.log('SALVAR DADOS')}
                  >
                    Salvar
                  </ButtonDefault>
                )}
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
