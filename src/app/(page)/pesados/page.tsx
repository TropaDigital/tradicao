'use client';

// Styles
import * as S from './styles';

// Images
import TruckBg from '../../../../public/images/consortiumTruck.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';
import TruckConsortium from '@/components/sections/TruckConsortium';
import PropertiesConsortium from '@/components/shared/PropertiesConsortium';

export default function ConsortiumTrucks() {
  const propertiesArray = [
    {
      id: 1,
      title: '0Km ou com até 12 anos de uso',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Caminhões',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 3,
      title: 'Micro-ônibus',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 4,
      title: 'Carretas',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 5,
      title: 'Ônibus',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 6,
      title: 'Motorhomes',
      image: 'https://via.placeholder.com/150',
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    }
  ];

  return (
    <>
      <S.ContainerTop data-aos="fade-up">
        <SkewContainer
          imageSrc={TruckBg}
          imageAlt="Imagem de um caminhão de carga numa estrada"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Pesados" />
            <S.SubtitleTop>Comece ou amplie a sua frota!</S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <PropertiesConsortium data={propertiesArray} />
        <TruckConsortium />
      </CenterWrapper>

      <OurContemplated />
    </>
  );
}
