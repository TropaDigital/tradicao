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
import Slider from 'react-slick';
import MainTitle from '@/components/UI/MainTitle';
import {
  EyeIcon,
  HeartIcon,
  LikeIcon,
  MagnifyingGlass,
  PersonEmptyIcon,
  RadialPauseIcon,
  RadialPlayIcon,
  WatchIcon
} from '@/assets/icons';
import ContemplatedValueCard from '@/components/pages/quem-somos/ContemplatedValueCard';
import { useRef, useState } from 'react';

import { BsPauseCircle } from 'react-icons/bs';

export default function QuemSomos() {
  const [videoStats, setVideoStats] = useState<boolean>(false);
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
          infinite: true
        }
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const MORAL_VALUES_CARD_ITENS = [
    {
      icon: <PersonEmptyIcon size={32} color={'var(--primary-mid)'} />,
      text: 'Justiça'
    },
    {
      icon: <EyeIcon size={32} color={'var(--primary-mid)'} />,
      text: 'Honestidade'
    },
    {
      icon: <LikeIcon size={32} color={'var(--primary-mid)'} />,
      text: 'Igualdade'
    },
    {
      icon: <MagnifyingGlass size={32} color={'var(--primary-mid)'} />,
      text: 'Transparência'
    },
    {
      icon: <HeartIcon size={32} color={'var(--primary-mid)'} />,
      text: 'Respeito'
    },
    {
      icon: <WatchIcon size={32} color={'var(--primary-mid)'} />,
      text: 'Agilidade'
    }
  ];

  const CONTEMPLATED_VALUE_DELIVERED: Array<string> = [
    'R$',
    '5',
    '0',
    '1',
    '.',
    '2',
    '6',
    '0',
    '.',
    '0',
    '0',
    '0'
  ];

  const videoRef: any = useRef();

  function toogleVideoStatus() {
    let video = videoRef?.current;
    if (video?.currentTime > 0 && !video?.paused && !video?.ended) {
      //check if video is playing
      video?.pause();
      setVideoStats(false);
    } else {
      video.play();
      setVideoStats(true);
    }
  }

  return (
    <S.QuemSomosContainer>
      <SkewContainer imageAlt="imagem teste" imageSrc={bgAboutUsImage} />
      <CenterWrapper>
        <MainTitle title="Quem Somos" />
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
        <Slider {...SLIDER_SETTINGS}>
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
          <S.MoralValuesCard>
            <h3 className="moralValuesTitle">Valores</h3>
            <div className="gridTemplateValuesCard">
              {MORAL_VALUES_CARD_ITENS.map(
                (row: any | 'tipar', index: number) => (
                  <S.MoralValuesCardItem>
                    {row.icon}
                    <p className="moralValuesCardItemText">{row.text}</p>
                  </S.MoralValuesCardItem>
                )
              )}
            </div>
          </S.MoralValuesCard>
        </Slider>
      </GreenCarousel>

      <CenterWrapper>
        <S.VideoWrapper videoIsRunning={videoStats}>
          <video
            webkit-playsInline
            playsInline
            autoPlay={false}
            ref={videoRef}
            className="bgHomeVideo"
            poster={'images/bgImageVideo.png'}
          >
            <source src={'/videos/testVideo.mp4'} type={'video/mp4'} />
          </video>

          <div className="overlayPlay">
            <div className="thirdColor">
              <div className="secondColor">
                <button
                  className="primaryColor"
                  onClick={() => {
                    toogleVideoStatus();
                  }}
                >
                  {videoStats === false ? (
                    <>
                      <RadialPlayIcon size={100} color={'var(--white)'} />
                    </>
                  ) : (
                    <>
                      <RadialPauseIcon size={100} color={'var(--white)'} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </S.VideoWrapper>
      </CenterWrapper>

      <S.ContemplatedWrapper>
        <CenterWrapper>
          <S.ContemplatedTitle>Em 20 anos de mercado</S.ContemplatedTitle>
          <S.ContemplatedQuotasWrapper>
            <div className="contemplatedQuotesNumber">40.050</div>
            <span className="contemplatedQuotesTextWrapper">
              <h3 className="contemplatedQuotesTitle">Cotas</h3>
              <p className="contemplatedQuotesText">contempladas</p>
            </span>
          </S.ContemplatedQuotasWrapper>

          <S.Separator />

          <S.ContemplatedValueWrapper>
            {CONTEMPLATED_VALUE_DELIVERED.map((row: string, key: number) => (
              <ContemplatedValueCard text={row} key={key} />
            ))}
          </S.ContemplatedValueWrapper>

          <S.ContemplatedValueText>
            milhões em créditos entregues
          </S.ContemplatedValueText>

          <S.Separator />

          <S.GenericFlexWrapper>
            <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">57.927</div>
              <span className="contemplatedQuotesTextWrapper">
                <h3 className="contemplatedQuotesTitle cl-white">Cotas</h3>
                <p className="contemplatedQuotesText cl-white">ativas</p>
              </span>
            </S.ContemplatedQuotasWrapper>

            <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">214</div>
              <span className="contemplatedQuotesTextWrapper">
                <h3 className="contemplatedQuotesTitle cl-white">Grupos</h3>
                <p className="contemplatedQuotesText cl-white">formados</p>
              </span>
            </S.ContemplatedQuotasWrapper>

            <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">218.500</div>
              <span className="contemplatedQuotesTextWrapper">
                <h3 className="contemplatedQuotesTitle cl-white">Total</h3>
                <p className="contemplatedQuotesText cl-white">de cotas</p>
              </span>
            </S.ContemplatedQuotasWrapper>
          </S.GenericFlexWrapper>
        </CenterWrapper>
      </S.ContemplatedWrapper>
    </S.QuemSomosContainer>
  );
}
