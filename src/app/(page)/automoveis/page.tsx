'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import PropertiesConsortium from '@/components/shared/PropertiesConsortium';
import SimulationForm from '@/components/shared/SimulationForm';
import MainTitle from '@/components/UI/MainTitle';
import AutoConsortium from '@/components/sections/AutoConsortium';
import OurContemplated from '@/components/sections/OurContemplated';

// Styles
import * as S from './styles';

// Images
import AutoMovel from '../../../../public/images/consortiumAuto.jpg';
import AutoTwelveYears from '../../../../public/images/auto_twelve_yeas.jpg';
import AutoZeroKm from '../../../../public/images/auto_zero_km.jpg';

export default function ConsortiumAuto() {
  const propertiesArray = [
    {
      id: 1,
      title: 'Carro zero Km',
      image: AutoZeroKm,
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Com até 12 anos de uso',
      image: AutoTwelveYears,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    }
  ];

  return (
    <>
      <S.ContainerTop>
        <SkewContainer imageSrc={AutoMovel} imageAlt="Imagem de um automóvel" />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin" data-aos="fade-up">
            <MainTitle title="Consórcio de Automóveis" />
            <S.SubtitleTop>
              Realize o seu sonho de ter o seu carro 0 KM ou seminovo*
            </S.SubtitleTop>
            <S.Spantop>*Carros seminovos com até 12 anos de uso.</S.Spantop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <PropertiesConsortium data={propertiesArray} />
      <AutoConsortium />

      <OurContemplated />
    </>
  );
}
