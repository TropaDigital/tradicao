'use client';

// Styles
import * as S from './styles';

// Images
import TruckBg from '../../../../public/images/consortiumTruck.jpg';
import TruckTwelveYears from '../../../../public/images/trucks_twelve_years.jpg';
import Trucks from '../../../../public/images/trucks.jpg';
import MicroBus from '../../../../public/images/micro_bus.jpg';
import Carreta from '../../../../public/images/carreta.jpg';
import Bus from '../../../../public/images/bus.jpg';
import MotorHomes from '../../../../public/images/motorhomes.jpg';

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
      image: TruckTwelveYears,
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Caminhões',
      image: Trucks,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 3,
      title: 'Micro-ônibus',
      image: MicroBus,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 4,
      title: 'Carretas',
      image: Carreta,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 5,
      title: 'Ônibus',
      image: Bus,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 6,
      title: 'Motorhomes',
      image: MotorHomes,
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

        <SimulationForm defaultStep="Pesados" />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Pesados" />
            <S.SubtitleTop>Comece ou amplie a sua frota!</S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <PropertiesConsortium data={propertiesArray} />
        {/* <TruckConsortium /> */}
      </CenterWrapper>

      <OurContemplated />
    </>
  );
}
