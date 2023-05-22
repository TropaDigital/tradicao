'use client';

// React
import React from 'react';

// Next
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Styles
import * as S from './styles';

// Images
import familyBanner from '../../../../public/images/family-on-grass.jpg';

// Icons
import { DefaultLogo, WhiteLogo } from '@/assets/icons';

// Components
import Button from '@/components/UI/Button';
import { InputPassword } from '@/components/UI/Inputs/InputPassword';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';

// Libraries
import { Form, Formik } from 'formik';
import { loginSchema } from './yupSchema';

// Services
import { loginClass } from '@/services/login-painel';

const PanelLoginComponent = () => {
  const router = useRouter();

  async function checkCredentials(values: any) {
    const isAnAdmin = await loginClass?.getAuthToken({
      email: values?.email,
      senha: values?.senha
    });

    if (isAnAdmin) router?.push('/painel/assembleias');
  }

  return (
    <S.Container>
      <S.RightWrapper>
        <div className="columnGreen">
          <div className="bannerOverlay">
            <div className="bannerLogo">
              <WhiteLogo width={786} height={231} />
            </div>
          </div>
          <Image
            src={familyBanner}
            alt="Login Banner"
            objectFit="cover"
            fill
            className="bannerImage"
          />
        </div>
      </S.RightWrapper>

      <Formik
        initialValues={{
          email: '',
          senha: ''
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          checkCredentials(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <S.FormWrapper>
            <Form onSubmit={handleSubmit} className="panelAccess">
              <div className="logoGreenCasaAmazonia">
                <Image
                  src="/images/logo-default.png"
                  alt="Logo do Consórcio Tradição"
                  width={262 * 1.2}
                  height={58 * 1.2}
                />
              </div>

              <h2 className="welcomeBack">Bem-vindo de volta!</h2>
              <h3 className="subtitleForm">
                Entre com sua conta para acessar o painel.
              </h3>
              <div className="inputWrapper">
                <InputDefault
                  label="Email"
                  onChange={handleChange}
                  value={values?.email}
                  placeholder="email@exemplo.com"
                  name="email"
                  error={touched?.email && errors?.email}
                />
              </div>
              <div className="inputWrapper">
                <InputPassword
                  label="Senha"
                  onChange={handleChange}
                  value={values?.senha}
                  placeholder="Digite sua senha"
                  name="senha"
                  error={touched?.senha && errors?.senha}
                />
              </div>
              <Button
                type="submit"
                degrade
                radius="rounded"
                onClick={() => {
                  SubmitEvent;
                }}
              >
                <p className="textSubmitPanel">Acessar minha conta</p>
              </Button>
            </Form>
          </S.FormWrapper>
        )}
      </Formik>
    </S.Container>
  );
};

export default PanelLoginComponent;
