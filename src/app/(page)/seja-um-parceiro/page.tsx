'use client';

// React
import React, { useState } from 'react';

// Componentes
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import { Formik, Form } from 'formik';
import MainTitle from '@/components/UI/MainTitle';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import BenefitsCard from '@/components/pages/Trabalhe-Conosco/BenefitsCards';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import Button from '@/components/UI/Button';

// Blibliotecas
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Imagens
import workWithUs from '../../../../public/images/work_with_us_bg.jpg';
import ConsorcioBenefit from '../../../../public/images/benefits_consorcio.jpg';
import PhoneBenefit from '../../../../public/images/phone_benefits.jpg';
import MoneyBenefit from '../../../../public/images/money-benefit.jpg';
import IncreaseBenefit from '../../../../public/images/increase-benefit.jpg';
import VisibilityBenefit from '../../../../public/images/visibility-benefit.jpg';
import PortfolioBenefit from '../../../../public/images/portfolio-benefit.jpg';

// Styles
import * as S from './styles';

// Validações
import { parceiroFormSchema } from '../trabalhe-conosco/yupSchemas';

// Funções
import { formatCnpj } from '@/utils/formatCnpj';
import { IPartnerPayload } from './types';

const PartnerPage = () => {
  const [charCount, setCharCount] = useState<number>(0);

  const PARTNER_BENEFITS = [
    {
      image: ConsorcioBenefit,
      title: 'Consórcio Digital'
    },
    {
      image: PhoneBenefit,
      title: 'Vendas na palma da mão aplicativo Tradição'
    },
    {
      image: MoneyBenefit,
      title: 'Remuneração atrativa'
    },
    {
      image: IncreaseBenefit,
      title: 'Aumentar Receita'
    },
    {
      image: VisibilityBenefit,
      title: 'Aumentar visibilidade do seu negócio'
    },
    {
      image: PortfolioBenefit,
      title: 'Ampliar Portfólio de Produtos'
    }
  ];

  const SLIDER_SETTINGS = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    className: 'slider-Container',
    responsive: [
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <>
      <SkewContainer imageAlt="Seja um parceiro" imageSrc={workWithUs} />

      <CenterWrapper>
        <S.Container>
          <MainTitle title="Seja um parceiro" />

          <S.CarousselWrapper>
            <Slider {...SLIDER_SETTINGS}>
              {PARTNER_BENEFITS?.map((benefits) => (
                <BenefitsCard image={benefits?.image} title={benefits?.title} />
              ))}
            </Slider>
          </S.CarousselWrapper>

          <Formik
            initialValues={
              {
                nome_da_empresa: '',
                cnpj: '',
                ramo_de_atividade: '',
                endereco: '',
                nome_de_contato: '',
                email_de_contato: '',
                telefone_de_contato: '',
                clientes_ativos: '',
                campo_aberto: ''
              } as IPartnerPayload
            }
            validationSchema={parceiroFormSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, errors, touched, handleSubmit, handleChange }: any) => {
              const INPUTS_NAMES = Object.keys(values);

              const INPUTS_PROPERTIES: any = {
                nome_da_empresa: {
                  label: 'Nome da empresa',
                  placeholder: 'Nome'
                },
                cnpj: {
                  label: 'CNPJ',
                  placeholder: 'CNPJ'
                },
                ramo_de_atividade: {
                  label: 'Ramo de atividade',
                  placeholder: 'Ramo de atividade'
                },
                endereco: {
                  label: 'Endereço',
                  placeholder: 'Endereço'
                },
                nome_de_contato: {
                  label: 'Nome de contato',
                  placeholder: 'Nome de contato'
                },
                email_de_contato: {
                  label: 'Email de contato',
                  placeholder: 'Email de contato'
                },
                telefone_de_contato: {
                  label: 'Telefone de contato',
                  placeholder: 'Telefone de contato'
                },
                clientes_ativos: {
                  label: 'Número de Clientes ativos',
                  placeholder: 'Clientes ativos'
                },
                campo_aberto: {
                  label: 'Campo aberto: Fale um pouco sobre sua empresa',
                  placeholder:
                    'ex: Qual região de atuação, pontos de vendas, quais parcerias já possui, quais produtos já comercializa...'
                }
              };

              return (
                <Form onSubmit={handleSubmit}>
                  <S.FormWrapper>
                    {INPUTS_NAMES?.map((properties) => (
                      <React.Fragment key={properties}>
                        {properties !== 'campo_aberto' && (
                          <InputDefault
                            name={properties}
                            onChange={handleChange}
                            placeholder={
                              INPUTS_PROPERTIES[properties]?.placeholder
                            }
                            label={INPUTS_PROPERTIES[properties]?.label}
                            value={
                              properties === 'cnpj'
                                ? formatCnpj(values[properties])
                                : values[properties]
                            }
                            maxLength={properties === 'cnpj' ? 14 : 9999999}
                            error={touched[properties] && errors[properties]}
                          />
                        )}

                        {properties === 'campo_aberto' && (
                          <TextAreaDefault
                            name={properties}
                            onChange={(e) => {
                              handleChange(e);
                              setCharCount(e?.target?.value?.length);
                            }}
                            label={INPUTS_PROPERTIES[properties].label}
                            error={touched[properties] && errors[properties]}
                            value={values[properties]}
                            placeholder={
                              INPUTS_PROPERTIES[properties].placeholder
                            }
                            charQuantity={charCount ?? 0}
                            maxCharLength={500}
                          />
                        )}
                      </React.Fragment>
                    ))}

                    <Button degrade type="submit">
                      Enviar
                    </Button>
                  </S.FormWrapper>
                </Form>
              );
            }}
          </Formik>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default PartnerPage;
