'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import HeroSkew from '@/components/pages/Home/HeroSkew';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import UploadFile from '@/components/UI/UploadFile';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as S from './styles';
import { curriulumFormSchema, representanteFormSchema } from './yupSchemas';
import WorkWithUsBg from '../../../../public/images/work_with_us_bg.png';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';

const WorkWithUsPage = () => {
  const [formStage, setFormStage] = useState<'curriculo' | 'representante'>(
    'curriculo'
  );

  const formatCnpj = (cnpj: string) => {
    cnpj = cnpj?.replace(/\D/g, '');
    return cnpj?.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  };

  return (
    <>
      <SkewContainer
        imageSrc={WorkWithUsBg}
        imageAlt="Imagem de fundo da seção trabalhe conosco"
        size="medium"
      />
      <CenterWrapper>
        <S.Container>
          <S.ButtonsWrapper>
            <Button
              weight={500}
              variant="default"
              onClick={() => setFormStage('curriculo')}
              color={formStage === 'curriculo' ? 'primary' : 'secondary'}
              degrade
              className="stage-form-button"
            >
              Enviar Currículo
            </Button>
            <Button
              weight={500}
              variant="default"
              onClick={() => setFormStage('representante')}
              color={formStage === 'representante' ? 'primary' : 'secondary'}
              type="submit"
              degrade
              className='stage-form-button'
            >
              Seja um Representante
            </Button>
          </S.ButtonsWrapper>

          {formStage === 'curriculo' && (
            <Formik
              initialValues={{
                fullName: '',
                role: '',
                curriulum: []
              }}
              validationSchema={curriulumFormSchema}
              onSubmit={(values, errors) => {
                console.log(values);
                // TODO: Integração com banco de dados
              }}
            >
              {({ values, errors, handleSubmit, handleChange, touched }) => (
                <Form onSubmit={handleSubmit} className="work-form">
                  <MainTitle
                    title="Cadastre seu currículo"
                    subtitle="Você também quer realizar sonhos na vida das pessoas? Venha trabalhar conosco!"
                  />
                  <InputDefault
                    name="fullName"
                    placeholder="Nome"
                    value={values.fullName}
                    onChange={handleChange}
                    label="Nome Completo"
                  />
                  <InputDefault
                    name="role"
                    placeholder="Cargo/ Vaga/ Área"
                    value={values.role}
                    onChange={handleChange}
                    label="Vaga"
                  />
                  <UploadFile
                    name="curriculum"
                    value={values.curriulum}
                    onChange={handleChange}
                    label="Anexar currículo"
                  />
                  <Button weight={500} type="submit">
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
              onSubmit={(values) => {
                console.log(values);
                // TODO: Integração com banco de dados
              }}
            >
              {({ handleChange, errors, values, handleSubmit, touched }) => (
                <Form onSubmit={handleSubmit} className="work-form">
                  <MainTitle
                    title="Seja um Representante"
                    subtitle="Você também quer realizar sonhos na vida das pessoas? Venha trabalhar conosco!"
                  />
                  <InputDefault
                    placeholder="Nome"
                    name="fullName"
                    onChange={handleChange}
                    value={values.fullName}
                    label="Nome Completo"
                  />
                  <InputDefault
                    placeholder="CNPJ"
                    name="cnpj"
                    onChange={(e: any) =>
                      values.cnpj.length <= 14 && handleChange(e)
                    }
                    value={formatCnpj(values.cnpj)}
                    label="CNPJ"
                  />
                  <InputDefault
                    placeholder="Contato"
                    name="contact"
                    onChange={handleChange}
                    value={values.contact}
                    label="Contato"
                  />
                  <Button type="submit">Enviar</Button>
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
