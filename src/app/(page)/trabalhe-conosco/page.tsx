'use client';

// React
import React, { useState } from 'react';

// Styles
import * as S from './styles';

// Imagens
import WorkWithUsBg from '../../../../public/images/work_with_us_bg.jpg';

// Componentes
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useCreateCandidate } from '@/services/trabalhe-conosco/POST/useCreateCadidate';
import { useCreateAgent } from '@/services/representante/POST';
import { CheckboxDefault } from '@/components/pages/Painel/components/inputs/CheckboxDefault';
import { Form, Formik } from 'formik';
import CenterWrapper from '@/components/global/CenterWrapper';
import UploadFile from '@/components/UI/UploadFile';
import MainTitle from '@/components/UI/MainTitle';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';

// Validações
import { curriulumFormSchema, representanteFormSchema } from './yupSchemas';
import { formatCnpj } from '@/utils/formatCnpj';
import Link from 'next/link';

const WorkWithUsPage = () => {
  const [formStage, setFormStage] = useState<string>('curriculo');
  const [fileName, setFileName] = useState<string>('');

  const FORM_STAGES = [
    {
      label: 'Enviar Currículo',
      value: 'curriculo'
    },
    {
      label: 'Seja um Representante',
      value: 'representante'
    }
  ];

  const { createCandidate } = useCreateCandidate();
  const { createAgent } = useCreateAgent();

  return (
    <>
      <SkewContainer
        imageSrc={WorkWithUsBg}
        imageAlt="Imagem de fundo da seção trabalhe conosco"
      />
      <CenterWrapper>
        <S.Container>
          <S.ButtonsWrapper>
            {FORM_STAGES?.map((stage) => (
              <Button
                weight={700}
                variant="default"
                onClick={() => setFormStage(stage?.value)}
                color={formStage === stage?.value ? 'secondary' : 'primary'}
                degrade
                className="stage-form-button"
              >
                {stage?.label}
              </Button>
            ))}
          </S.ButtonsWrapper>

          {formStage === 'curriculo' && (
            <Formik
              initialValues={{
                fullName: '',
                role: '',
                curriculum: [],
                privacyTerm: false
              }}
              validationSchema={curriulumFormSchema}
              onSubmit={(values, { resetForm }) => {
                // createCandidate({
                //   nome: values.fullName.trim(),
                //   vaga: values.role.trim(),
                //   curriculo_pdf: values.curriculum
                // });

                console.log(values);

                setFileName('');
                resetForm();
              }}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                touched,
                setFieldValue
              }) => (
                <Form
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    handleSubmit(e)
                  }
                  className="work-form"
                >
                  <S.TitleContainer>
                    <MainTitle title="Cadastre seu currículo" />
                    <p className="subtitle">
                      Você também quer realizar sonhos na vida das pessoas?
                      Venha trabalhar conosco!
                    </p>
                  </S.TitleContainer>
                  <InputDefault
                    name="fullName"
                    placeholder="Nome"
                    value={values.fullName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    label="Nome Completo"
                    error={touched.fullName && errors.fullName}
                  />
                  <InputDefault
                    name="role"
                    placeholder="Cargo/ Vaga/ Área"
                    value={values.role}
                    onChange={handleChange}
                    label="Vaga"
                    error={touched.role && errors.role}
                  />
                  <UploadFile
                    name="curriculum"
                    id="curriculum"
                    label="Anexar currículo"
                    onPostFile={(curriculoUrl, e) => {
                      if (curriculoUrl) {
                        handleChange(e);
                        setFileName(e?.target?.value?.replace(/.*[\/\\]/, ''));
                        setFieldValue('curriculum', [curriculoUrl]);
                      }
                    }}
                    errors={touched.curriculum && errors.curriculum}
                    filename={fileName}
                  />

                  <div>
                    <CheckboxDefault
                      label={
                        <>
                          Aceito o{' '}
                          <Link href="/termos-de-privacidade" target="_blank">
                            termo de privacidade
                          </Link>
                        </>
                      }
                      name="privacyTerm"
                      checked={values?.privacyTerm}
                      onChange={handleChange}
                      error={
                        touched?.privacyTerm ? errors?.privacyTerm : undefined
                      }
                    />
                  </div>

                  <Button weight={500} type="submit" degrade>
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
          )}

          {formStage === 'representante' && (
            <Formik
              initialValues={{
                fullName: '',
                cnpj: '',
                contact: '',
                privacyTerm: false
              }}
              validationSchema={representanteFormSchema}
              onSubmit={(values, { resetForm }) => {
                createAgent({
                  nome: values.fullName.trim(),
                  cnpj: formatCnpj(values.cnpj),
                  contato: values.contact.trim()
                });

                resetForm();
              }}
            >
              {({ handleChange, errors, values, handleSubmit, touched }) => (
                <Form onSubmit={handleSubmit} className="work-form">
                  <S.TitleContainer>
                    <MainTitle title="Seja um Representante" />
                    <p className="subtitle">
                      Você também quer realizar sonhos na vida das pessoas?
                      Venha trabalhar conosco!
                    </p>
                  </S.TitleContainer>
                  <InputDefault
                    placeholder="Nome"
                    name="fullName"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={values.fullName}
                    label="Nome Completo"
                    error={touched.fullName && errors.fullName}
                  />
                  <InputDefault
                    placeholder="CNPJ"
                    name="cnpj"
                    onChange={handleChange}
                    value={formatCnpj(values.cnpj)}
                    label="CNPJ"
                    maxLength={14}
                    error={touched.cnpj && errors.cnpj}
                  />
                  <InputDefault
                    placeholder="Contato"
                    name="contact"
                    onChange={handleChange}
                    value={values.contact}
                    label="Contato"
                    error={touched.contact && errors.contact}
                  />

                  <div>
                    <CheckboxDefault
                      label={
                        <>
                          Aceito o{' '}
                          <Link href="/termos-de-privacidade" target="_blank">
                            termo de privacidade
                          </Link>
                        </>
                      }
                      name="privacyTerm"
                      onChange={handleChange}
                      checked={values?.privacyTerm}
                      error={
                        touched?.privacyTerm ? errors?.privacyTerm : undefined
                      }
                    />
                  </div>

                  <Button degrade type="submit">
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default WorkWithUsPage;
