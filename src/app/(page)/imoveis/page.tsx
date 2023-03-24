'use client';

// Styles
import * as S from './styles';

// Images
import Imovel from '../../../../public/images/realEstateConsortium.png';
import Apto from '../../../../public/images/Apartment.svg';
import Casa from '../../../../public/images/House.svg';
import Financiamento from '../../../../public/images/Financing.svg';
import Construcao from '../../../../public/images/Construction.svg';
import Reforma from '../../../../public/images/Reform.svg';
import Terreno from '../../../../public/images/Land.svg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import SimulationForm from '@/components/shared/SimulationForm';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import OurContemplated from '@/components/sections/OurContemplated';
import Image from 'next/image';

interface IRealStateProperties {
  id: number;
  image: any;
  title: string;
  altImg: string;
}

export default function ConsortiumProperties() {
  const propertiesArray: IRealStateProperties[] = [
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
      <S.ContainerTop>
        <SkewContainer
          size="medium"
          imageSrc={Imovel}
          imageAlt="Imagem de uma família se abraçando na sala de casa"
        />

        <SimulationForm />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Consórcio de Imóveis" />
            <S.SubtitleTop>
              Realize o seu sonho de ter sua casa própria
            </S.SubtitleTop>
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <S.PropertiesConsortiumType>
          {propertiesArray.map((row: any, key: any) => (
            <S.ConsortiumCard key={row.id}>
              <S.ConsortiumCardImage>
                <Image
                  width={165}
                  height={155}
                  src={row.image}
                  alt={row.altImg}
                />
              </S.ConsortiumCardImage>
              <S.ConsortiumCardText>{row.title}</S.ConsortiumCardText>
            </S.ConsortiumCard>
          ))}
        </S.PropertiesConsortiumType>
      </CenterWrapper>

      <OurContemplated />
    </>
  );
}
