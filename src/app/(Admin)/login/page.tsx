'use client';

import React from 'react';

import Image from 'next/image';
import * as S from './styles';

import familyBanner from '../../../../public/images/family-on-grass.jpg';

import { DefaultLogo, WhiteLogo } from '@/assets/icons';
import Button from '@/components/UI/Button';

import { InputPassword } from '@/components/UI/Inputs/InputPassword';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { Form, Formik } from 'formik';
import { loginSchema } from './yupSchema';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import cookieClass from '@/utils/cookieClass';
import { loginClass } from '@/services/login-painel';

const PanelLoginComponent = () => {
  const router = useRouter();

  async function checkCredentials(values: any) {
    console.log(
      await loginClass?.getAuthToken({
        email: values?.email,
        senha: values?.senha
      })
    );
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
                <DefaultLogo width={262 * 1.2} height={58 * 1.2} />
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
