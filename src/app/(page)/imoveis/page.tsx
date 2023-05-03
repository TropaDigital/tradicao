'use client';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Images
import Imovel from '../../../../public/images/realEstateConsortium.jpg';
import Apto from '../../../../public/images/apartment.jpg';
import Casa from '../../../../public/images/house.jpg';
import Financiamento from '../../../../public/images/financing.jpg';
import Construcao from '../../../../public/images/construction.jpg';
import Reforma from '../../../../public/images/reform.jpg';
import Terreno from '../../../../public/images/land.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';
import PropertiesConsortium from '@/components/shared/PropertiesConsortium';

export default function ConsortiumProperties() {
  const propertiesArray = [
    {
      id: 1,
      title: 'Apartamento',
      image: Apto,
      altImg: 'Imagem de um edifício'
    },
    {
      id: 2,
      title: 'Casa',
      image: Casa,
      altImg: 'Imagem de uma casa pequena na mão de um casal'
    },
    {
      id: 3,
      title: 'Quitação de Financiamento',
      image: Financiamento,
      altImg: 'Imagem de dois homens apertando as mãos e um contrato abaixo'
    },
    {
      id: 4,
      title: 'Construção',
      image: Construcao,
      altImg: 'Imagem de uma parede de tijolos sendo construída'
    },
    {
      id: 5,
      title: 'Reforma',
      image: Reforma,
      altImg: 'Imagem de um homem pintando uma parede'
    },
    {
      id: 6,
      title: 'Terreno',
      image: Terreno,
      altImg: 'Imagem de um terreno gramado'
    }
  ];

  return (
    <>
      <S.ContainerTop data-aos="fade-up">
        <SkewContainer
          imageSrc={Imovel}
          imageAlt="Imagem de uma família se abraçando na sala de casa"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Imóveis" />
            <S.SubtitleTop>Realize o sonho da casa própria!</S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <PropertiesConsortium data={propertiesArray} />
      </CenterWrapper>

      <OurContemplated />
    </>
  );
}
