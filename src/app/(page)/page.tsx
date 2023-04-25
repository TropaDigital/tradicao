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
import { useGetAllCounters } from '@/services/contadores/GET/useGetAllCounters';

export default function Home() {
  const { getCounters } = useGetAllCounters();

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

      {getCounters && (
        <BlueInfos
          quotasTotal={getCounters?.result[0]?.cotas_contemplados}
          creditsTotal={getCounters?.result[0]?.creditos}
        />
      )}

      <ConsortiumWorks />

      <Contemplated />

      <BlogContainer />
    </Container>
  );
}
