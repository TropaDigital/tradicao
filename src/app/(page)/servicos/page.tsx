'use client';

// Styles
import * as S from './styles';

// Images
import ServicesBg from '../../../../public/images/consortiumServices.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';

export default function ConsortiumServices() {
  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={ServicesBg}
          imageAlt="Imagem de uma mulher com uma câmera digital em mãos"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Serviços" />
            <S.SubtitleTop>Realize o seu sonho</S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <OurContemplated />
    </>
  );
}
