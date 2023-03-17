'use client';
import GreenCarousel from '@/components/global/GreenCarousel';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import { FieldGroup } from '@/components/pages/Painel/components/UiElements/styles';
import CardCarousel from '@/components/shared/CardCarousel';
import HeaderSkew from '@/components/shared/HeaderSkew';
import Steps from '@/components/Steps';
import Button from '@/components/UI/Button';
import { useSteps } from '@/hooks/useSteps';
import React, { useCallback, useState } from 'react';

import contato_bg from '../../../public/images/contato_bg.png';
import Person from '/public/images/imagePerson.jpg';
import InfoGeral from './componentSteps/InfoGeral';
import { ConfirmImovel, InfoImovel } from './componentSteps/InfoImovel';
import { ConfirmService, InfoService } from './componentSteps/InfoServices';
import { ConfirmTruck, InfoTruck } from './componentSteps/InfoTruck';
import { ConfirmVehicle, InfoVehicle } from './componentSteps/InfoVehicle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container, SectionSimulatorForm, TitleSimulator } from './styles';

type HandleOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void

type HandleOnChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => void

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
  terms: boolean,
  cpf: string;
  regulation: boolean
}

const styleButtonPlan = {
  height: '40px',
  border: '1px solid #0036C6'
};

export default function Home() {
  const [error, setError] = useState<StateProps>({});
  const [isSimulator, setSimulator] = useState(false);
  const [selectStep, setSelectStep] = useState('veiculo');
  const [formData, setFormData] = useState({
    conquest: 'veiculo',
    typePlan: 'parcela',
    value: 1250,
    name: '',
    email: '',
    phone: '',
    cep: '',
    terms: false,
    cpf: '',
    regulation: false
  } as PlanProps)

  const handleOnChange: HandleOnChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleOnChangeCheckbox: HandleOnChangeCheckbox = (event) => {
    const { checked, name } = event.target
    setFormData({ ...formData, [name]: checked })
  }


  console.log('FORMDATA =>', formData)

  const newComponents = [
    {
      name: 'homeComponents',
      componet: [
        <InfoGeral
          setSimulatorPlan={(value) => setFormData({...formData, ['typePlan']: value})}
          simulatorPlan={formData.typePlan}
          styleButtonPlan={styleButtonPlan}
          handleOnChangeValue={(value) => setFormData({...formData, ['value']: value[0]})}
          defaultValue={formData.value}
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
    setFormData({...formData, ['conquest']: name})
  };

  function setErrorInput(value: any, message: any) {
    if(!message) {
      delete error[value]
    }

    setError({...error, [value]: message })
    return message;
  }

  const hadnleOnSaveStep = () => {
    const { cpf, regulation } = formData;

    try {
      if (cpf === "") {
        throw setErrorInput('cpf', 'CPF / CNPJ é obrigatório!');
      } else {
        setErrorInput('cpf', undefined);
      } 

      if (regulation === false) {
        throw setErrorInput('regulation', 'Aceite oregulamento para continuar')
      } else {
        setErrorInput('regulation', undefined);
      }
      
    } catch(err: any) {
      console.log('ERROR => ', error)
    }
  }

  const handleOnNextStep = () => {
    const { name, email, phone, cep, terms } = formData;

    try {
      if (name === "") {
        throw setErrorInput('name', 'Nome é obrigatório!');
      } else {
        setErrorInput('name', undefined);
      }

      if (email === "") {
        throw setErrorInput('email', 'Email é obrigatório!');
      } else {
        setErrorInput('email', undefined);
      }

      if (phone === "") {
        throw setErrorInput('phone', 'Celular é obrigatório!');
      } else {
        setErrorInput('phone', undefined);
      }

      if (cep === "") {
        throw setErrorInput('cep', 'Cep é obrigatório!');
      } else {
        setErrorInput('cep', undefined);
      }

      if (terms === false) {
        throw setErrorInput('terms', 'Aceite os termos para continuar')
      } else {
        setErrorInput('terms', undefined);
      }

      subChangeStep(subCurrentStep + 1)

    } catch(error: any) {
      console.log('ERROR', error)
      // addToast({
      //   title: 'Atenção',
      //   description: error,
      //   type: 'warning'
      // })
    }
  }

  const handleOnSubmit = useCallback((event: any) => {
    event.preventDefault();

    try {
      hadnleOnSaveStep()
    } catch(err: any) {

    }

  }, []);

  return (
    <Container>
      <HeroSkew
        altBackgroundImage="imagem de fundo"
        backgroundImage={contato_bg}
      />

      <SectionSimulatorForm>
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
            <div style={{ flex: '0 1 0' }}>{newComponents[0].componet}</div>
          )}

          {isSimulator && (
            <FieldGroup style={{ flex: '0 1 0' }}>
              <>
                <Button
                  radius="rounded"
                  degrade
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
                  <Button
                    radius="rounded"
                    degrade
                    type="button"
                    // onClick={() => subChangeStep(subCurrentStep + 1)}
                    onClick={handleOnNextStep}
                  >
                    Avançar
                  </Button>
                ) : (
                  <Button
                    radius="rounded"
                    degrade
                    type="button"
                    onClick={hadnleOnSaveStep}
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
              type="button"
              onClick={() => setSimulator(!isSimulator)}
            >
              Simular
            </Button>
          )}
        </form>
      </SectionSimulatorForm>

      {/* Precisa de no minímo 1 imagem fora da tela para começar a rodar */}
      <GreenCarousel
        title='Contemplados'
        height='350'
        marginBottom='110'
      >   
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="my-swiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='300'
              padding='20'
              image={Person}
              imageType={false}
              bigText={false}
              title='Título genérico'
              description="Aqui um exemplo de um card que contem imagem e texto"
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='300'
              padding='20'
              image={Person}
              imageType={false}
              bigText={false}
              title='Título genérico'
              description="Aqui um exemplo de um card que contem imagem e texto"
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='300'
              padding='20'
              image={Person}
              imageType={false}
              bigText={false}
              title='Título genérico'
              description="Aqui um exemplo de um card que contem imagem e texto"
            />       
          </SwiperSlide>          

          <SwiperSlide>
            <CardCarousel 
              width='276'
              heigth='276'
              padding='20'
              image={Person}
              imageType={true}
              bigText={false}
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='200'
              padding='34'
              image=''
              imageType={false}
              bigText={true}
              haveIcons={true}              
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='200'
              padding='34'
              title='Missão'
              description='Possibilitar conquistas, proporcionando à sociedade brasileira a aquisição de bens de consumo, livres de juros abusivos de forma transparente e justa.'
              imageType={false}
              bigText={true}
              haveIcons={false}              
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='300'
              padding='20'
              image={Person}
              imageType={false}
              bigText={false}
              title='Título genérico'
              description="Aqui um exemplo de um card que contem imagem e texto"
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='276'
              heigth='276'
              padding='20'
              image={Person}
              imageType={true}
              bigText={false}
            />       
          </SwiperSlide>
          
        </Swiper>
      </GreenCarousel>
    </Container>
  );
}
