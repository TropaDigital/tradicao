'use client';

// React
import React, { useEffect, useRef, useState } from 'react';

// Componentes
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import MainTitle from '@/components/UI/MainTitle';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import BenefitsCard from '@/components/pages/Trabalhe-Conosco/BenefitsCards';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import Button from '@/components/UI/Button';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';

// Blibliotecas
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Formik, Form, useFormikContext, FormikProps } from 'formik';

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
import { parceiroFormSchema } from './yupSchema';

// Funções
import { formatCnpj } from '@/utils/formatCnpj';
import { IPartnerInitialValues, IPartnerPayload } from './types';
import { cepMask, onlyNumbersMask, phoneMask } from '@/utils/masks';
import { useCreateParceiro } from '@/services/seja-um-parceiro/POST/useCreateParceiro';

// Classes
import viaCep from '@/services/via-cep';
import { IViaCepResponse } from '@/services/via-cep/types';

const PartnerPage = () => {
  const [charCount, setCharCount] = useState<number>(0);
  const [cep, setCep] = useState<string>('');
  const [endereco, setEndereco] = useState({} as IViaCepResponse);

  const { createParceiro } = useCreateParceiro();

  const formikRef = useRef<FormikProps<any>>(null);

  useEffect(() => {
    getAddressByCep(cep);
  }, [cep]);

  useEffect(() => {
    handleAddressFormik();
  }, [endereco]);

  async function getAddressByCep(cep: string) {
    const cepWithoutMask = onlyNumbersMask(cep);

    if (cepWithoutMask.length === 8) {
      const address = await viaCep?.getAddress(cep);
      setEndereco(address);
      return;
    }

    setEndereco({} as IViaCepResponse);
  }

  function handleAddressFormik() {
    const formikForm = formikRef?.current;

    if (formikForm) {
      formikForm.setFieldValue('estado', endereco?.uf);
      formikForm.setFieldValue('cidade', endereco?.localidade);
      formikForm.setFieldValue('bairro', endereco?.bairro);
      formikForm.setFieldValue('logradouro', endereco?.logradouro);
    }

    if (!endereco && formikForm) {
      formikForm.setFieldValue('estado', '');
      formikForm.setFieldValue('cidade', '');
      formikForm.setFieldValue('bairro', '');
      formikForm.setFieldValue('logradouro', '');
    }
  }

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
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 8000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
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

  const INITIAL_VALUES_FORM: IPartnerInitialValues = {
    campo_aberto: '',
    cnpj: '',
    email_de_contato: '',
    bairro: '',
    cep: '',
    cidade: '',
    complemento: '',
    estado: '',
    logradouro: '',
    numero: '',
    nome_da_empresa: '',
    nome_de_contato: '',
    ramo_de_atividade: '',
    telefone_de_contato: ''
  };

  const BRAZILIAN_STATES: { [key: string]: any } = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
  };

  const BRAZILIAN_STATE_KEYS = Object.keys(BRAZILIAN_STATES);

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
            initialValues={INITIAL_VALUES_FORM as IPartnerInitialValues}
            validationSchema={parceiroFormSchema}
            innerRef={formikRef}
            onSubmit={(values) => {
              const partnerPayload: IPartnerPayload = {
                nome_da_empresa: values?.nome_da_empresa,
                cnpj: onlyNumbersMask(values?.cnpj),
                ramo_de_atividade: values?.ramo_de_atividade,
                nome_de_contato: values?.nome_de_contato,
                email_de_contato: values?.email_de_contato,
                telefone_de_contato: values?.telefone_de_contato,
                campo_aberto: values?.campo_aberto,
                endereco: {
                  cep: onlyNumbersMask(values?.cep),
                  logradouro: values?.logradouro,
                  numero: values?.numero,
                  complemento: values?.complemento,
                  bairro: values?.bairro,
                  cidade: values?.cidade,
                  estado: values?.estado
                }
              };

              createParceiro(partnerPayload);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <S.FormWrapper>
                    <fieldset className="lineWrapperInputs">
                      <InputDefault
                        label="Nome da Empresa"
                        placeholder={'Consórcio Tradição'}
                        value={values?.nome_da_empresa}
                        name="nome_da_empresa"
                        onChange={handleChange}
                        error={
                          touched?.nome_da_empresa && errors?.nome_da_empresa
                        }
                      />
                      <InputDefault
                        label={'CNPJ'}
                        placeholder={'00.000.000/0000-00'}
                        maxLength={18}
                        onChange={handleChange}
                        name="cnpj"
                        value={formatCnpj(values?.cnpj)}
                        error={touched?.cnpj && errors?.cnpj}
                      />
                      <InputDefault
                        label={'Ramo de Atividade'}
                        placeholder={
                          'Consórcio, Imobiliária, Corretora de Seguros, etc'
                        }
                        onChange={handleChange}
                        name="ramo_de_atividade"
                        value={values?.ramo_de_atividade}
                        error={
                          touched?.ramo_de_atividade &&
                          errors?.ramo_de_atividade
                        }
                      />
                    </fieldset>

                    <fieldset className="multiRowsField">
                      <div className="lineWrapperInputs">
                        <InputDefault
                          label={'Nome de Contato'}
                          placeholder={'João da Silva'}
                          onChange={handleChange}
                          name="nome_de_contato"
                          value={values?.nome_de_contato}
                          error={
                            touched?.nome_de_contato && errors?.nome_de_contato
                          }
                        />
                        <InputDefault
                          label={'E-mail'}
                          placeholder={'email@email.com'}
                          onChange={handleChange}
                          name="email_de_contato"
                          value={values?.email_de_contato}
                          error={
                            touched?.email_de_contato &&
                            errors?.email_de_contato
                          }
                        />
                        <InputDefault
                          label={'Telefone'}
                          placeholder={'21 99999-9999'}
                          onChange={handleChange}
                          name="telefone_de_contato"
                          value={phoneMask(values?.telefone_de_contato)}
                          error={
                            touched?.telefone_de_contato &&
                            errors?.telefone_de_contato
                          }
                          maxLength={13}
                        />
                      </div>

                      <TextAreaDefault
                        label="Fale sobre sua empresa"
                        placeholder="Ex: Qual região de atuação, número de funcionários, equipe de vendas..."
                        maxCharLength={500}
                        charQuantity={charCount ?? 0}
                        onChange={(e) => {
                          setCharCount(e.target.value.length);
                          handleChange(e);
                        }}
                        value={values?.campo_aberto}
                        name="campo_aberto"
                        error={touched?.campo_aberto && errors?.campo_aberto}
                      />
                    </fieldset>

                    <fieldset className="multiRowsField">
                      <div className="lineWrapperInputs">
                        <InputDefault
                          label={'CEP'}
                          placeholder={'00000-000'}
                          onChange={(e) => {
                            setCep(cepMask(e?.target?.value));
                            setFieldValue('cep', cep);
                          }}
                          name="cep"
                          value={cep}
                          maxLength={9}
                          error={touched?.cep && errors?.cep}
                        />

                        <SelectDefault
                          label={'Estado'}
                          value={values?.estado}
                          name="estado"
                          onChange={handleChange}
                          error={touched?.estado && errors?.estado}
                        >
                          <option value="">Selecione um Estado</option>
                          {BRAZILIAN_STATE_KEYS?.map((estado) => (
                            <option value={estado}>
                              {BRAZILIAN_STATES[estado]}
                            </option>
                          ))}
                        </SelectDefault>
                        <InputDefault
                          label={'Cidade'}
                          placeholder={'São João de Meriti'}
                          onChange={(e) => {
                            handleChange(e);
                            setFieldValue('cidade', endereco?.localidade);
                          }}
                          name="cidade"
                          value={values?.cidade}
                          error={touched?.cidade && errors?.cidade}
                        />
                        <InputDefault
                          label={'Bairro'}
                          placeholder={'Vila Norma'}
                          onChange={handleChange}
                          name="bairro"
                          value={values?.bairro}
                          error={touched?.bairro && errors?.bairro}
                        />
                      </div>

                      <div className="lineWrapperInputs">
                        <InputDefault
                          label={'Logradouro'}
                          placeholder={'Av. Automóvel Clube'}
                          onChange={handleChange}
                          name="logradouro"
                          value={values?.logradouro}
                          error={touched?.logradouro && errors?.logradouro}
                        />

                        <div className="lineWrapperInputs">
                          <InputDefault
                            label={'Número'}
                            placeholder={'1458'}
                            value={values?.numero}
                            onChange={handleChange}
                            name="numero"
                            error={touched?.numero && errors?.numero}
                          />

                          <InputDefault
                            label={'Complemento'}
                            placeholder={'Apto. 201'}
                            value={values?.complemento}
                            onChange={handleChange}
                            name="complemento"
                            error={touched?.complemento && errors?.complemento}
                          />
                        </div>
                      </div>
                    </fieldset>

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
