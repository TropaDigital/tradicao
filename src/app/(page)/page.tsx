'use client';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import car_bg from '../../../public/images/car_banner.jpg';

import Contemplated from '@/components/sections/Contemplated';

import { Container, SimulationFormContainer } from './styles';
import Speciality from '@/components/sections/Speciality';
import BlueInfos from '@/components/pages/Home/BlueInfos';
import ConsortiumWorks from '@/components/pages/Home/ConsortiumWorks';
import SimulationForm from '@/components/shared/SimulationForm';
import BlogContainer from '@/components/pages/Home/BlogContainer';

export default function Home() {
  return (
    <Container>
      <HeroSkew
        backgroundImage={car_bg}
        altBackgroundImage="Imagem de um carro com um homem e uma criança ao lado"
        subtitle="Realizar sonhos se tornou Tradição!"
        solidHeight={'86%'}
      />

      <SimulationFormContainer>
        <SimulationForm />
      </SimulationFormContainer>

      <Speciality />

      <BlueInfos quotasTotal="39.583" creditsTotal="501.260.000" />

      <ConsortiumWorks />

      <Contemplated />

      <BlogContainer />
    </Container>
  );
}
