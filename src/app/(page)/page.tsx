'use client';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import car_bg from '../../../public/images/car_banner.png';

import Contemplated from '@/components/sections/Contemplated';
import SimulationForm from '@/components/shared/SimulationForm';

import { Container } from './styles';
import Speciality from '@/components/sections/Speciality';
import BlueInfos from '@/components/pages/Home/BlueInfos';

export default function Home() {
  return (
    <Container>
      <HeroSkew
        backgroundImage={car_bg}
        altBackgroundImage="Imagem de um carro com um pai e um filho ao lado"
        subtitle="Você mais próximo dos seus sonhos!"
        solidHeight={'86%'}
      />

      <SimulationForm />

      <Speciality />

      <BlueInfos 
        quotasTotal='39.583'
        creditsTotal='501.260.000'
      />

      <Contemplated />
    </Container>
  );
}
