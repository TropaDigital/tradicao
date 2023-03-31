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
  const [selectStep, setSelectStep] = useState('veiculo');
  const [formData, setFormData] = useState({
    conquest: 'veiculo',
    typePlan: 'parcela',
    value: 700,
    name: '',
    email: '',
    phone: '',
    cep: '',
    terms: false,
    cpf: '',
    regulation: false
  } as PlanProps);

  const handleOnChange: HandleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnChangeCheckbox: HandleOnChangeCheckbox = (event) => {
    const { checked, name } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  // console.log('FORMDATA =>', formData);

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
      name: 'veiculo',
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
        />
      ]
    },
    {
      name: 'imovel',
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
        />
      ]
    },
    {
      name: 'servicos',
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
        />
      ]
    },
    {
      name: 'caminhao',
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
          'Aceite o regulamento para continuar'
        );
      } else {
        setErrorInput('regulation', undefined);
      }
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

      if (formData.conquest === 'veiculo' || formData.conquest === 'imovel') {
        if (email === '') {
          throw setErrorInput('email', 'Email é obrigatório!');
        } else if (!email.includes('@')) {
          throw setErrorInput('email', 'Email inválido!');
        } else if (!email.includes('.')) {
          throw setErrorInput('email', 'Email inválido!');
        } else {
          setErrorInput('email', undefined);
        }
      }

      if (phone === '') {
        throw setErrorInput('phone', 'Celular é obrigatório!');
      } else if (phone?.replace(/\D/g, '')?.length < 11) {
        throw setErrorInput('phone', 'Número de celular inválido');
      } else {
        setErrorInput('phone', undefined);
      }

      if (cep === '') {
        throw setErrorInput('cep', 'Cep é obrigatório!');
      } else if (cep?.replace(/\D/g, '')?.length < 8) {
        throw setErrorInput('cep', 'Cep inválido');
      } else {
        setErrorInput('cep', undefined);
      }

      if (terms === false) {
        throw setErrorInput('terms', 'Aceite os termos para continuar');
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

  const pathName = usePathname();

  useEffect(() => {
    if (formData.conquest === 'veiculo' && formData.typePlan === 'parcela') {
      setFormData({ ...formData, ['value']: 700 });      
    };

    if (formData.conquest === 'veiculo' && formData.typePlan === 'credito') {
      setFormData({ ...formData, ['value']: 215000 });      
    };

    if (formData.conquest === 'imovel' && formData.typePlan === 'parcela') {
      setFormData({ ...formData, ['value']: 1750 });      
    };

    if (formData.conquest === 'imovel' && formData.typePlan === 'credito') {
      setFormData({ ...formData, ['value']: 165000 });      
    };

    if (formData.conquest === 'servicos' && formData.typePlan === 'parcela') {
      setFormData({ ...formData, ['value']: 500 });      
    };

    if (formData.conquest === 'servicos' && formData.typePlan === 'credito') {
      setFormData({ ...formData, ['value']: 10000 });      
    };

    if (formData.conquest === 'caminhao' && formData.typePlan === 'parcela') {
      setFormData({ ...formData, ['value']: 3850 });      
    };

    if (formData.conquest === 'caminhao' && formData.typePlan === 'credito') {
      setFormData({ ...formData, ['value']: 170000 });      
    };
  }, [formData.typePlan, formData.conquest])

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

              {!subIsLastStep ? (
                <Button radius="rounded" degrade onClick={handleOnNextStep}>
                  Avançar
                </Button>
              ) : (
                <Button
                  radius="rounded"
                  type="submit"
                  degrade
                  onClick={handleOnSaveStep}
                >
                  Salvar
                </Button>
              )}
            </>
          </FieldGroup>
        )}

        {!isSimulator && (
          <Button
            radius="rounded"
            degrade
            onClick={() => setSimulator(!isSimulator)}
          >
            Simular
          </Button>
        )}
      </form>
    </SectionSimulatorForm>
  );
}
