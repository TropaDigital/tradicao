'use client';

// Styles
import * as S from './styles';

// Images
import ServicesBg from '../../../../public/images/consortiumServices.jpg';
import Surgeon from '../../../../public/images/surgeon.jpg';
import Marry from '../../../../public/images/marry.jpg';
import Studies from '../../../../public/images/studies.jpg';
import Trips from '../../../../public/images/trip.jpg';
import SolarEnergy from '../../../../public/images/solar_energy.jpg';
import Consultory from '../../../../public/images/consultory.jpg';
import Cabelereiro from '../../../../public/images/cabeleleiro.jpg';
import Barber from '../../../../public/images/barber.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';
import PropertiesConsortium from '@/components/shared/PropertiesConsortium';

export default function ConsortiumServices() {
  const propertiesArray = [
    {
      id: 1,
      title: 'Cirurgias',
      image: Surgeon,
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Casamentos',
      image: Marry,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 3,
      title: 'Estudos',
      image: Studies,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 4,
      title: 'Viagens',
      image: Trips,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 5,
      title: 'Energia solar fotovoltaica',
      image: SolarEnergy,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 6,
      title: 'Consultórios',
      image: Consultory,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 7,
      title: 'Salão de Cabeleireiro',
      image: Cabelereiro,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 8,
      title: 'Barbeiro',
      image: Barber,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    }
  ];

  return (
    <>
      <S.ContainerTop data-aos="fade-up">
        <SkewContainer
          imageSrc={ServicesBg}
          imageAlt="Imagem de uma mulher com uma câmera digital em mãos"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Serviços" />
            <S.SubtitleTop>
              Com planejamento e disciplina, o consórcio de serviço pode ser a
              chave para alcançar seu sonho, proporcionando a tranquilidade
              financeira necessária para conquistar seus objetivos!
            </S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <PropertiesConsortium data={propertiesArray} />
      <OurContemplated />
    </>
  );
}
