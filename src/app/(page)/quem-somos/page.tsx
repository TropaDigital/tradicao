'use client';

// React
import { useEffect, useRef, useState } from 'react';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';
import MainTitle from '@/components/UI/MainTitle';
import ContemplatedValueCard from '@/components/pages/quem-somos/ContemplatedValueCard';

// Images
import bgAboutUsImage from '../../../../public/images/aboutUsHeader.jpg';
import abacEmpresaImg from '../../../../public/images/abacEmpresaImg.png';
import bancoCenterBrasilImg from '../../../../public/images/bancoCenterBrasilImg.png';
import bgTradicaoImage from '../../../../public/images/completeBrasao.png';

// Libraries
import Slider from 'react-slick';

// Icons
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

// Services
import { useGetAllCounters } from '@/services/contadores/GET/useGetAllCounters';
import { iniciarContagem } from '@/utils/iniciarContagem';
import { useGetVideo } from '@/services/video-institucional/GET/useGetVideo';

export default function QuemSomos() {
  const { getCounters } = useGetAllCounters();

  const [values, setValues] = useState({
    creditos: 592000000,
    quotas: 42150,
    grupos: 222,
    cotasTotal: 185400
  });

  const [credits, setCredits] = useState<number>(0);
  const [quotas, setQuotas] = useState<number>(0);
  const [grupos, setGrupos] = useState<number>(0);
  const [cotasTotal, setCotasTotal] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          iniciarContagem(values?.creditos, setCredits, 1000000);
          iniciarContagem(values?.quotas, setQuotas, 75);
          iniciarContagem(values?.grupos, setGrupos, 1);
          iniciarContagem(values?.cotasTotal, setCotasTotal, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const countRef = useRef(null);

  const { video } = useGetVideo();

  const [videoStats, setVideoStats] = useState<boolean>(false);

  const BENEFITS_WITH_CONSORCIO_TRADICAO: Array<string> = [
    'Consórcio digital',
    'Compra planejada',
    'Sem entrada',
    'Sem juros',
    'Parcelas mensais que cabem no seu bolso',
    'Representantes em todo território nacional'
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
    ...String(credits.toLocaleString())?.split('')
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
    <S.QuemSomosContainer data-aos="fade-up">
      <SkewContainer imageAlt="imagem teste" imageSrc={bgAboutUsImage} />
      <CenterWrapper>
        <MainTitle title="Quem Somos" />
        <S.AboutUsContent>
          <p>
            Somos uma administradora de consórcio que tem como objetivo oferecer
            soluções financeiras inteligentes e personalizadas para nossos
            clientes. Com mais de 20 anos de experiência no mercado, trabalhamos
            com transparência, ética e responsabilidade para proporcionar aos
            nossos clientes uma experiência única e satisfatória.
          </p>

          <p>
            Nossa equipe é formada por profissionais altamente capacitados, que
            estão sempre atualizados com as novidades do mercado e prontos para
            auxiliar nossos consorciados em todas as etapas do processo de
            consórcio, desde a escolha do plano até a contemplação.
          </p>

          <p>
            Acreditamos que o consórcio é uma forma inteligente e segura de
            adquirir bens e serviços, e por isso, investimos constantemente em
            tecnologia e inovação para tornar o processo ainda mais fácil e
            acessível para nossos clientes.
          </p>

          <p data-aos="fade-up">
            Nosso compromisso é oferecer sempre o melhor atendimento e as
            melhores soluções para nossos clientes, visando sua satisfação e
            fidelização. Se você busca uma administradora de consórcio confiável
            e comprometida com o seu sucesso, conte com o Consórcio Tradição.
          </p>
        </S.AboutUsContent>
        <S.AboutUsSubtitle>
          O melhor jeito de realizar seu sonho
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
                  width={200}
                  height={56}
                />
              </div>
              <div className="imageWrapper">
                <span className="imageLabel">Autorizada</span>
                <Image
                  alt="imagem com a logotipo do banco central"
                  src={bancoCenterBrasilImg}
                  width={200}
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
          <S.MoralValuesCard data-aos="fade-up">
            <h3 className="moralValuesTitle">Valores</h3>
            <div className="gridTemplateValuesCard">
              {MORAL_VALUES_CARD_ITENS.map(
                (row: any | 'tipar', index: number) => (
                  <S.MoralValuesCardItem key={index}>
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
            poster={video?.url_thumb}
            src={video?.url_video}
          >
            {/* <source src={video?.url_video} type={'video/mp4'} /> */}
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
          <S.ContemplatedTitle>Mais de 20 anos de mercado</S.ContemplatedTitle>
          <S.ContemplatedQuotasWrapper>
            <div className="contemplatedQuotesNumber">
              {/* {getCounters?.result[0]?.cotas_contemplados?.toLocaleString()} */}
              {quotas?.toLocaleString()}
            </div>
            <span className="contemplatedQuotesTextWrapper">
              <h3 className="contemplatedQuotesTitle">Cotas</h3>
              <p className="contemplatedQuotesText">contempladas</p>
            </span>
          </S.ContemplatedQuotasWrapper>

          <S.Separator />

          <S.ContemplatedValueWrapper>
            <div ref={countRef} style={{ display: 'flex', gap: '8px' }}>
              {CONTEMPLATED_VALUE_DELIVERED.map((row: string, key: number) => (
                <ContemplatedValueCard text={row} key={key} />
              ))}
            </div>
          </S.ContemplatedValueWrapper>

          <S.ContemplatedValueText>
            milhões em créditos entregues
          </S.ContemplatedValueText>

          <S.Separator />

          <S.GenericFlexWrapper>
            {/* <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">57.927</div>
              <span className="contemplatedQuotesTextWrapper">
                <h3 className="contemplatedQuotesTitle cl-white">Cotas</h3>
                <p className="contemplatedQuotesText cl-white">ativas</p>
              </span>
            </S.ContemplatedQuotasWrapper> */}

            <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">
                {/* {getCounters?.result[0]?.grupos.toLocaleString()} */}
                {grupos?.toLocaleString()}
              </div>
              <span className="contemplatedQuotesTextWrapper">
                <h3 className="contemplatedQuotesTitle cl-white">Grupos</h3>
                <p className="contemplatedQuotesText cl-white">formados</p>
              </span>
            </S.ContemplatedQuotasWrapper>

            <S.ContemplatedQuotasWrapper>
              <div className="contemplatedQuotesNumber cl-white">
                {/* {getCounters?.result[0]?.contas_total?.toLocaleString()} */}
                {cotasTotal?.toLocaleString()}
              </div>
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
