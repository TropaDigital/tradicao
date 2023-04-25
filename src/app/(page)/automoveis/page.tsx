'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';

// Styles
import * as S from './styles';

// Images
import AutoMovel from '../../../../public/images/consortiumAuto.jpg';
import SimulationForm from '@/components/shared/SimulationForm';
import MainTitle from '@/components/UI/MainTitle';
import AutoConsortium from '@/components/sections/AutoConsortium';
import OurContemplated from '@/components/sections/OurContemplated';

export default function ConsortiumAuto() {
  return (
    <>
      <S.ContainerTop>
        <SkewContainer imageSrc={AutoMovel} imageAlt="Imagem de um automóvel" />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Automóveis" />
            <S.SubtitleTop>
              Realize o seu sonho de ter o seu carro 0 KM ou seminovo*
            </S.SubtitleTop>
            <S.Spantop>*Carros seminovos com até 12 anos de uso.</S.Spantop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <AutoConsortium />

      <OurContemplated />
    </>
  );
}
