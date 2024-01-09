'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import PropertiesConsortium from '@/components/shared/PropertiesConsortium';
import SimulationForm from '@/components/shared/SimulationForm';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';

// Styles
import * as S from './styles';

// Images
import MotorCycle from '../../../../public/images/consortiumMoto.jpg';
import MotoKm from '../../../../public/images/moto-zero-km.jpg';
import MotoUso from '../../../../public/images/moto-5-uso.jpg';

export default function ConsortiumMoto() {
  const propertiesArray = [
    {
      id: 1,
      title: 'Moto zero Km',
      image: MotoKm,
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Com até 5 anos de uso',
      image: MotoUso,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    }
  ];

  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={MotorCycle}
          imageAlt="Imagem de um automóvel"
        />

        <SimulationForm defaultStep="Motos" />

        <CenterWrapper>
          <div className="margin content-wrapper" data-aos="fade-up">
            <MainTitle title="Consórcio de Motos" />
            <S.SubtitleTop>
              O consórcio de motos pode ser a oportunidade que faltava para
              realizar o sonho de ter sua própria moto, de forma planejada e sem
              comprometer seu orçamento. Invista em seu futuro e comece a
              realizar seus objetivos hoje mesmo!
            </S.SubtitleTop>
            {/* <S.Spantop>*Carros seminovos com até 12 anos de uso.</S.Spantop> */}
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <PropertiesConsortium data={propertiesArray} />
      {/* <AutoConsortium /> */}

      <OurContemplated />
    </>
  );
}
