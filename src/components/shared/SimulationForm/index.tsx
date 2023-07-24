'use client';

import { FieldGroup } from '@/components/pages/Painel/components/UiElements/styles';
import React, { useCallback, useEffect, useState } from 'react';
import Steps from '@/components/Steps';
import Button from '@/components/UI/Button';
import { useSteps } from '@/hooks/useSteps';
import InfoGeral from '../componentSteps/InfoGeral';
import { ConfirmImovel, InfoImovel } from '../componentSteps/InfoImovel';
import { ConfirmService, InfoService } from '../componentSteps/InfoServices';
import { ConfirmTruck, InfoTruck } from '../componentSteps/InfoTruck';
import { ConfirmVehicle, InfoVehicle } from '../componentSteps/InfoVehicle';
import { SectionSimulatorForm, TitleSimulator } from './styles';
import { usePathname } from 'next/navigation';
import { validateCnpj } from '@/utils/validateCnpj';
import { validateCpf } from '@/utils/validateCpf';
import { useCreateSimulacao } from '@/services/simulacao/POST/useCreateSimulacao';
import { useUpdateSimulacao } from '@/services/simulacao/PUT/useUpdateSimulacao';
import FinalStep from '../componentSteps/finalStep/index';

type HandleOnChange = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>
) => void;

type HandleOnChangeCheckbox = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

interface StateProps {
  [key: string]: any;
}

interface PlanProps {
  conquest: string;
  typePlan: string;
  value: number;
  name: string;
  email: string;
  phone: string;
  cep: string;
  terms: boolean;
  cpf: string;
  regulation: boolean;
}

const styleButtonPlan = {
  height: '40px',
  border: '1px solid #0036C6'
};

export default function SimulationForm() {
  const [error, setError] = useState<StateProps>({});
  const [isSimulator, setSimulator] = useState(false);
  const [selectStep, setSelectStep] = useState('Veículos');
  const [formData, setFormData] = useState({
    conquest: 'Veículos',
    typePlan: 'Parcela',
    value: 1366.58,
    name: '',
    email: '',
    phone: '',
    cep: '',
    terms: false,
    cpf: '',
    regulation: false
  } as PlanProps);
  const [currentLead, setCurrentLead] = useState<number>();

  const { createSimulacao } = useCreateSimulacao();
  const { updateSimulacao } = useUpdateSimulacao();

  const handleOnChange: HandleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnChangeCheckbox: HandleOnChangeCheckbox = (event) => {
    const { checked, name } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const newComponents = [
    {
      name: 'homeComponents',
      componet: [
        <InfoGeral
          setSimulatorPlan={(value) =>
            setFormData({ ...formData, ['typePlan']: value })
          }
          simulatorPlan={formData.typePlan}
          styleButtonPlan={styleButtonPlan}
          handleOnChangeValue={(value) =>
            setFormData({ ...formData, ['value']: value[0] })
          }
          defaultValue={formData.value}
          selectedType={selectStep}
        />
      ]
    },
    {
      name: 'Veículos',
      componet: [
        <InfoVehicle
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <ConfirmVehicle
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <FinalStep />
      ]
    },
    {
      name: 'Imóveis',
      componet: [
        <InfoImovel
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <ConfirmImovel
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <FinalStep />
      ]
    },
    {
      name: 'Serviços',
      componet: [
        <InfoService
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <ConfirmService
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <FinalStep />
      ]
    },
    {
      name: 'Pesados',
      componet: [
        <InfoTruck
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <ConfirmTruck
          data={formData}
          handleInputChange={handleOnChange}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          error={error}
        />,
        <FinalStep />
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
    setFormData({ ...formData, ['conquest']: name });
  };

  function setErrorInput(value: any, message: any) {
    if (!message) {
      delete error[value];
    }

    setError({ ...error, [value]: message });
    return message;
  }

  const handleOnSaveStep = () => {
    const { cpf, regulation } = formData;

    try {
      const clearCpf = cpf?.replace(/\D/g, '');
      if (cpf === '') {
        throw setErrorInput('cpf', 'CPF / CNPJ é obrigatório!');
      } else if (clearCpf?.length > 0 && clearCpf?.length < 11) {
        throw setErrorInput('cpf', 'CPF deve conter 11 dígitos');
      } else if (clearCpf?.length === 11 && !validateCpf(cpf)) {
        throw setErrorInput('cpf', 'CPF Inválido');
      } else if (clearCpf?.length > 11 && clearCpf?.length < 14) {
        throw setErrorInput('cpf', 'CNPJ deve conter 14 dígitos');
      } else if (!validateCnpj(cpf) && clearCpf?.length === 14) {
        throw setErrorInput('cpf', 'CNPJ inválido');
      } else {
        setErrorInput('cpf', undefined);
      }

      if (regulation === false) {
        throw setErrorInput(
          'regulation',
          'É necessário aceitar nosso Termo de Privacidade para seguir.'
        );
      } else {
        setErrorInput('regulation', undefined);
      }

      updateSimulacao({
        id: currentLead as number,
        putBody: { cpf: formData.cpf }
      });

      subChangeStep(subCurrentStep + 1);
    } catch (err: any) {
      console.log('ERROR => ', error);
    }
  };

  const handleOnNextStep = () => {
    const { name, email, phone, cep, terms } = formData;

    try {
      if (name === '') {
        throw setErrorInput('name', 'Nome é obrigatório!');
      } else {
        setErrorInput('name', undefined);
      }

      if (email === '') {
        throw setErrorInput('email', 'Email é obrigatório!');
      } else if (!email.includes('@')) {
        throw setErrorInput('email', 'Email inválido!');
      } else if (!email.includes('.')) {
        throw setErrorInput('email', 'Email inválido!');
      } else {
        setErrorInput('email', undefined);
      }

      if (phone === '') {
        throw setErrorInput('phone', 'Celular é obrigatório!');
      } else if (phone?.replace(/\D/g, '')?.length < 11) {
        throw setErrorInput('phone', 'Número de celular inválido');
      } else {
        setErrorInput('phone', undefined);
      }

      if (terms === false) {
        throw setErrorInput(
          'terms',
          'É necessário aceitar nosso Termo de Privacidade para seguir.'
        );
      } else {
        setErrorInput('terms', undefined);
      }

      subChangeStep(subCurrentStep + 1);
    } catch (error: any) {
      console.log('ERROR', error);
      // addToast({
      //   title: 'Atenção',
      //   description: error,
      //   type: 'warning'
      // })
    }
  };

  const handleOnSubmit = useCallback((event: any) => {
    event.preventDefault();

    try {
      if (subIsLastStep) handleOnSaveStep();
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  function handleOnSimulateAgain() {
    subChangeStep(0);
    setSimulator(!isSimulator);
    setFormData({ ...formData, cpf: '' });
  }

  const pathName = usePathname();

  useEffect(() => {
    if (formData.conquest === 'Veículos' && formData.typePlan === 'Parcela') {
      setFormData({ ...formData, ['value']: 1366.58 });
    }

    if (formData.conquest === 'Veículos' && formData.typePlan === 'Crédito') {
      setFormData({ ...formData, ['value']: 71984.96 });
    }

    if (formData.conquest === 'Imóveis' && formData.typePlan === 'Parcela') {
      setFormData({ ...formData, ['value']: 1313.84 });
    }

    if (formData.conquest === 'Imóveis' && formData.typePlan === 'Crédito') {
      setFormData({ ...formData, ['value']: 155954.88 });
    }

    if (formData.conquest === 'Serviços' && formData.typePlan === 'Parcela') {
      setFormData({ ...formData, ['value']: 382.92 });
    }

    if (formData.conquest === 'Serviços' && formData.typePlan === 'Crédito') {
      setFormData({ ...formData, ['value']: 15000 });
    }

    if (formData.conquest === 'Pesados' && formData.typePlan === 'Parcela') {
      setFormData({ ...formData, ['value']: 5236.25 });
    }

    if (formData.conquest === 'Pesados' && formData.typePlan === 'Crédito') {
      setFormData({ ...formData, ['value']: 185914.31 });
    }
  }, [formData.typePlan, formData.conquest]);

  useEffect(() => {
    if (subCurrentStep === 1) {
      createSimulacao({
        cpf: formData?.cpf,
        celular: formData?.phone,
        cep: formData?.cep,
        email: formData?.email,
        nome: formData?.name,
        valor_bem: String(formData?.value),
        tipo_consorcio: formData?.conquest,
        tipo_simulacao: formData?.typePlan
      }).then((data: any) => setCurrentLead(data?.result));
    }
  }, [subCurrentStep]);

  return (
    <SectionSimulatorForm heroStyles={pathName === '/' ? true : false}>
      <form onSubmit={handleOnSubmit}>
        {!isSimulator && (
          <TitleSimulator>Qual sua próxima conquista?</TitleSimulator>
        )}
        {!isSimulator && (
          <Steps
            currentStep={currentStep}
            handleOnClick={(name, step) => changeStepComp(name, step)}
          />
        )}

        {isSimulator ? (
          <div style={{ flex: '1 1 0' }}>{subCurrentComponent}</div>
        ) : (
          <div style={{ flex: '0 1 0' }}>
            {
              <InfoGeral
                setSimulatorPlan={(value) =>
                  setFormData({ ...formData, ['typePlan']: value })
                }
                simulatorPlan={formData.typePlan}
                styleButtonPlan={styleButtonPlan}
                handleOnChangeValue={(value) =>
                  setFormData({ ...formData, ['value']: value[0] })
                }
                defaultValue={formData.value}
                selectedType={selectStep}
              />
            }
          </div>
        )}

        {isSimulator && (
          <FieldGroup style={{ flex: '0 1 0' }}>
            <>
              {!subIsLastStep && (
                <Button
                  radius="rounded"
                  degrade
                  type={'button'}
                  onClick={() => {
                    if (subCurrentStep === 0) {
                      setSimulator(!isSimulator);
                      subChangeStep(subCurrentStep - 1);
                    }
                    subChangeStep(subCurrentStep - 1);
                  }}
                >
                  Voltar
                </Button>
              )}

              {!subIsLastStep ? (
                <Button
                  radius="rounded"
                  type="button"
                  degrade
                  onClick={() => {
                    if (subCurrentStep === 1) {
                      handleOnSaveStep();
                      return;
                    }
                    handleOnNextStep();
                  }}
                >
                  {subCurrentStep !== 1 ? 'Avançar' : 'Enviar'}
                </Button>
              ) : (
                <Button
                  radius="rounded"
                  type="button"
                  degrade
                  onClick={handleOnSimulateAgain}
                >
                  Simular novamente
                </Button>
              )}
            </>
          </FieldGroup>
        )}

        {!isSimulator && (
          <Button
            radius="rounded"
            degrade
            type="button"
            onClick={() => setSimulator(!isSimulator)}
            className="simulateButton"
          >
            Simular
          </Button>
        )}
      </form>
    </SectionSimulatorForm>
  );
}
