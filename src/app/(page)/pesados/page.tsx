'use client';

// Styles
import * as S from './styles';

// Images
import TruckBg from '../../../../public/images/ConsortiumTruck.png';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';
import TruckConsortium from '@/components/sections/TruckConsortium';

export default function ConsortiumTrucks() {
  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={TruckBg}
          imageAlt="Imagem de um caminhão de carga numa estrada"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Pesados" />
            <S.SubtitleTop>Realize o seu sonho</S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <TruckConsortium />
      </CenterWrapper>

      <OurContemplated />
    </>
  );
}
