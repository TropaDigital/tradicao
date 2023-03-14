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
import CitroenLogo from '/public/images/CitroenLogo.svg';
import FordLogo from '/public/images/FordLogo.svg';
import JacLogo from '/public/images/JacLogo.svg';
import JeepLogo from '/public/images/JeepLogo.svg';
import MercedesLogo from '/public/images/MercedesLogo.svg';
import PeugeotLogo from '/public/images/PeugeotLogo.svg';
import VolksLogo from '/public/images/VolksLogo.svg';
import VolksTruck from '/public/images/VolksTrucksLogo.svg';
import AgraleTruck from '/public/images/AgraleTrucksLogo.svg';
import FordTruck from '/public/images/FordTrucksLogo.svg';
import IvecoTruck from '/public/images/IvecoTrucksLogo.svg';
import JinbeiTruck from '/public/images/JinbeiTrucksLogo.svg';
import MarcopoloTruck from '/public/images/MarcopoloTrucksLogo.svg';
import MercedesTruck from '/public/images/MercedesTrucksLogo.svg';
import ScaniaTruck from '/public/images/ScaniaTrucksLogo.svg';
import VolvoTruck from '/public/images/VolvoTrucksLogo.svg';

// Libraries
import Slider from "react-slick";

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

  const SlideSettings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const BrandSettings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

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

      {/* Carrossel de contemplados */}
      <GreenCarousel
        title='Contemplados'
        height='350'
        marginBottom='110'
      >  
        <Slider {...SlideSettings}>
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
                
          <CardCarousel 
            width='276'
            heigth='276'
            padding='20'
            image={Person}
            imageType={true}
            bigText={false}
          />  
      
          <CardCarousel 
            width='360'
            heigth='200'
            padding='34'
            image=''
            imageType={false}
            bigText={true}
            haveIcons={true}              
          />       
                
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

          <CardCarousel 
            width='276'
            heigth='276'
            padding='20'
            image={Person}
            imageType={true}
            bigText={false}
          />

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

        </Slider>
       
          
      </GreenCarousel>
      
      {/* Carrossel de automóveis */}
      <BrandsCarousel>
          
        <Slider {...BrandSettings}>
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={FiatLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={CheryLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={BmwLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={300}
              height={96}
              src={ChevroletLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={MercedesLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={JacLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={FordLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={CitroenLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={VolksLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={PeugeotLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={JeepLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={FiatLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={CheryLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={BmwLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={300}
              height={96}
              src={ChevroletLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
      
          <BrandCard>
            <Image
              width={157}
              height={96}
              src={MercedesLogo}
              alt={'Icon image'}
              className='auto'
            />
          </BrandCard>
          
        </Slider>  
          
      </BrandsCarousel>
      
      {/* Carrossel de caminhões */}
      <BrandsCarousel>
          <Slider {...BrandSettings}>
            <BrandCard>
              <Image
                width={130}
                height={130}
                src={VolksTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={JinbeiTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={AgraleTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={MercedesTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={IvecoTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={FordTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={MarcopoloTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={VolvoTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={ScaniaTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
              <BrandCard>
              <Image
                width={130}
                height={130}
                src={VolksTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={JinbeiTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={AgraleTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={MercedesTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={IvecoTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={FordTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={MarcopoloTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={VolvoTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
          
            <BrandCard>
              <Image
                width={157}
                height={96}
                src={ScaniaTruck}
                alt={'Icon image'}
                className='truck'
              />
            </BrandCard>
            
          </Slider>
      </BrandsCarousel>
    </Container>
  );
}
