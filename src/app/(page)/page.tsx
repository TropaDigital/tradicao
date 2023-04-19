'use client';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import home_bg from '../../../public/images/home_bg.jpg';

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
        backgroundImage={home_bg}
        altBackgroundImage="Imagem de um carro com um homem e uma criança ao lado"
        subtitle="Realizar sonhos se tornou Tradição!"
        solidHeight={'86%'}
      />

      <SimulationFormContainer>
        <SimulationForm />
      </SimulationFormContainer>

      <Speciality />

      <BlueInfos quotasTotal="39583" creditsTotal="501260000" />

      <ConsortiumWorks />

      <Contemplated />

      <BlogContainer />
    </Container>
  );
}
