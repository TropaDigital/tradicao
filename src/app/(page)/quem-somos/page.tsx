'use client';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Image from 'next/image';
import * as S from './styles';

import bgAboutUsImage from '../../../../public/images/aboutUsHeader.png';

import abacEmpresaImg from '../../../../public/images/abacEmpresaImg.png';
import bancoCenterBrasilImg from '../../../../public/images/bancoCenterBrasilImg.png';

import bgTradicaoImage from '../../../../public/images/completeBrasao.png';

export default function QuemSomos() {
  const BENEFITS_WITH_CONSORCIO_TRADICAO: Array<string> = [
    'Consórcio Delivery 100% Digital',
    'Prazos flexíveis',
    'Prestação menores que um financiamento',
    'Depois de contemplado entrega rápida do bem',
    'Contemplações por sorteio e lance todos os meses (extraído pela loteria federal)',
    'Representação em nível nacional'
  ];

  return (
    <S.QuemSomosContainer>
      <SkewContainer
        imageAlt="imagem teste"
        imageSrc={bgAboutUsImage}
        size={'medium'}
      />
      <CenterWrapper>
        <S.AboutUsTitle>Quem somos</S.AboutUsTitle>
        <S.AboutUsContent>
          Com mais de 20 anos no mercado de Consórcio, a Tradição se tornou
          autoridade na modalidade alternativa de investimento a longo prazo.
          Sempre possibilitando conquistas, sem juros, com parcelas flexíveis,
          sendo assim, uma forma acessível de investir dinheiro para todos. Além
          disso, contamos com representantes por todo o Brasil, nossa missão é a
          realização do consumidor possuir o próprio bem, sempre com
          transparência e qualidade!
        </S.AboutUsContent>
        <S.AboutUsSubtitle>
          O Melhor jeito de realizar seu sonho
        </S.AboutUsSubtitle>
        <S.AboutUsBenefitsTitle>
          Conheça as vantagens do Consórcio tradição
        </S.AboutUsBenefitsTitle>
      </CenterWrapper>

      {/* removed benefits of center wrapper for correct image positioning  */}
      <S.BenefitsBottomWrapper>
        <S.AbsoluteImageWrapper>
          <Image
            alt="imagem de fundo do consórcio tradição"
            src={bgTradicaoImage}
            height={742}
            width={742}
          />
        </S.AbsoluteImageWrapper>

        <CenterWrapper>
          <div className="benefitsContainer">
            <div className="leftSide">
              <ul>
                {BENEFITS_WITH_CONSORCIO_TRADICAO.map(
                  (row: string, key: number) => (
                    <S.BenefitItem key={key}>{row}</S.BenefitItem>
                  )
                )}
              </ul>
            </div>
            <div className="rigthSide">
              <div className="imageWrapper">
                <span className="imageLabel">Afiliada</span>
                <Image
                  alt="imagem com a logotipo da ABAC"
                  src={abacEmpresaImg}
                  width={150}
                  height={56}
                />
              </div>
              <div className="imageWrapper">
                <span className="imageLabel">Autorizada</span>
                <Image
                  alt="imagem com a logotipo do banco central"
                  src={bancoCenterBrasilImg}
                  width={150}
                  height={56}
                />
              </div>
            </div>
          </div>
        </CenterWrapper>
      </S.BenefitsBottomWrapper>
    </S.QuemSomosContainer>
  );
}
