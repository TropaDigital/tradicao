'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import UploadFile from '@/components/UI/UploadFile';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { curriulumFormSchema, representanteFormSchema } from './yupSchemas';
import WorkWithUsBg from '../../../../public/images/work_with_us_bg.png';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useCreateCandidate } from '@/services/trabalhe-conosco/POST/useCreateCadidate';
import { useCreateAgent } from '@/services/representante/POST';

const WorkWithUsPage = () => {
  const [formStage, setFormStage] = useState<'curriculo' | 'representante'>(
    'curriculo'
  );
  const [fileName, setFileName] = useState<string>('');

  const formatCnpj = (cnpj: string) => {
    cnpj = cnpj?.replace(/\D/g, '');
    return cnpj?.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  };

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
            <Button
              weight={700}
              variant="default"
              onClick={() => setFormStage('curriculo')}
              color={formStage === 'curriculo' ? 'primary' : 'secondary'}
              degrade
              className="stage-form-button"
            >
              Enviar Currículo
            </Button>
            <Button
              weight={700}
              variant="default"
              onClick={() => setFormStage('representante')}
              color={formStage === 'representante' ? 'primary' : 'secondary'}
              type="submit"
              degrade
              className="stage-form-button"
            >
              Seja um Representante
            </Button>
          </S.ButtonsWrapper>

          {formStage === 'curriculo' && (
            <Formik
              initialValues={{
                fullName: '',
                role: '',
                curriculum: []
              }}
              validationSchema={curriulumFormSchema}
              onSubmit={(values, { resetForm }) => {
                createCandidate({
                  nome: values.fullName.trim(),
                  vaga: values.role.trim(),
                  curriculo_pdf: values.curriculum
                });

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
                      if (!/^[a-zA-Z\s]*$/.test(e?.target?.value)) return;
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
                contact: ''
              }}
              validationSchema={representanteFormSchema}
              onSubmit={(values, { resetForm }) => {
                createAgent({
                  nome: values.fullName.trim(),
                  cnpj: values.cnpj.replaceAll(/\D+/g, ''),
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
                      if (!/^[a-zA-Z\s]*$/.test(e?.target?.value)) return;
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
                  <Button degrade type="submit">Enviar</Button>
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
