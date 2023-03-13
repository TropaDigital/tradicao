'use client';

// React
import React, { useCallback, useState } from 'react';

// Next
import Image from 'next/image';

// Components
import GreenCarousel from '@/components/global/GreenCarousel';

import HeroSkew from '@/components/pages/Home/HeroSkew';
import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import { FieldGroup } from '@/components/pages/Painel/components/UiElements/styles';
import CardCarousel from '@/components/shared/CardCarousel';
import HeaderSkew from '@/components/shared/HeaderSkew';
import Steps from '@/components/Steps';
import { useSteps } from '@/hooks/useSteps';
import InfoGeral from './componentSteps/InfoGeral';
import InfoImovel from './componentSteps/InfoImovel';
import InfoServices from './componentSteps/InfoServices';
import InfoTruck from './componentSteps/InfoTruck';
import InfoVehicle from './componentSteps/InfoVehicle';
import BrandsCarousel from '@/components/shared/BrandsCarousel';

// Images
import contato_bg from '../../../public/images/contato_bg.png';
import Person from '/public/images/imagePerson.jpg';
import FiatLogo from '/public/images/FiatLogo.svg';
import BmwLogo from '/public/images/BMWLogo.svg';
import CheryLogo from '/public/images/CheryLogo.svg';
import ChevroletLogo from '/public/images/ChevroletLogo.svg';
import FordLogo from '/public/images/FordLogo.svg';
import JacLogo from '/public/images/JacLogo.svg';
import JeepLogo from '/public/images/JeepLogo.svg';
import MercedesLogo from '/public/images/MercedesLogo.svg';
import PeugeotLogo from '/public/images/PeugeotLogo.svg';
import VolksLogo from '/public/images/VolksLogo.svg';

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Styles
import { Container, SectionSimulatorForm, TitleSimulator } from './styles';
import BrandCard from '@/components/shared/BrandCard';


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
      <HeroSkew
        altBackgroundImage="imagem de fundo"
        backgroundImage={contato_bg}
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

      <BrandsCarousel>
          <Swiper
            slidesPerView={7}
            className="my-swiper"           
          >
            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={FiatLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={CheryLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={BmwLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={ChevroletLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={MercedesLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={JacLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={FordLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={JacLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={VolksLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={PeugeotLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

            <SwiperSlide>
              <BrandCard>
                <Image
                  width={157}
                  height={96}
                  src={JeepLogo}
                  alt={'Icon image'}
                />
              </BrandCard>
            </SwiperSlide>

          </Swiper>
      </BrandsCarousel>
    </Container>
  );
}
