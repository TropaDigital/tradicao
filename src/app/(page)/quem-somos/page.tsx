'use client';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Image from 'next/image';
import * as S from './styles';

import bgAboutUsImage from '../../../../public/images/aboutUsHeader.png';

import abacEmpresaImg from '../../../../public/images/abacEmpresaImg.png';
import bancoCenterBrasilImg from '../../../../public/images/bancoCenterBrasilImg.png';

import bgTradicaoImage from '../../../../public/images/completeBrasao.png';
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';
import Slider from "react-slick";


export default function QuemSomos() {
  const BENEFITS_WITH_CONSORCIO_TRADICAO: Array<string> = [
    'Consórcio Delivery 100% Digital',
    'Prazos flexíveis',
    'Prestação menores que um financiamento',
    'Depois de contemplado entrega rápida do bem',
    'Contemplações por sorteio e lance todos os meses (extraído pela loteria federal)',
    'Representação em nível nacional'
  ];

  const SLIDER_SETTINGS = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,          
        }
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
  };

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

      <GreenCarousel
        title="Nossas Diretrizes"
        subtitle="Aquilo que nos move dia a dia!"
        height="317"
        marginBottom="50"
        padTopCarousel={62}
      >
        <S.AboutUsCardWrapper>
          <Slider 
          {...SLIDER_SETTINGS}
          >
            <CardCarousel
            bigText={true}
            title="Missão"
            description="Possibilitar conquistas, proporcionando à sociedade brasileira a aquisição de bens de consumo, livres de juros abusivos de forma transparente e justa."
            heigth="200"
            imageType={false}
            padding="20px"
            width="357"
          />
          <CardCarousel
            bigText={true}
            title="Visão"
            description="Destacar-se entre as 10 maiores administradoras independentes do Brasil, crescendo com segurança e solidez."
            heigth="200"
            imageType={false}
            padding="20px"
            width="357"
          />
          <CardCarousel
            bigText={true}
            title="Missão"
            description="Possibilitar conquistas, proporcionando à sociedade brasileira a aquisição de bens de consumo, livres de juros abusivos de forma transparente e justa."
            heigth="200"
            imageType={false}
            padding="20px"
            width="357"
          />
          </Slider>
          
        </S.AboutUsCardWrapper>
      </GreenCarousel>
    </S.QuemSomosContainer>
  );
}
