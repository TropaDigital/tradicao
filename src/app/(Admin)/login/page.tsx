'use client';

import React, { useState, useEffect, FormEvent } from 'react';

import Image, { StaticImageData } from 'next/image';
import * as S from './styles';

import carBanner from '../../../../public/images/car_banner.jpg';

import { DefaultLogo } from '@/assets/icons';
import Button from '@/components/UI/Button';

import { toast } from 'react-toastify';
import { InputPassword } from '@/components/UI/Inputs/InputPassword';
import cookieClass from '@/utils/cookieClass';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { Form, Formik } from 'formik';
import { loginSchema } from './yupSchema';
import { useRouter } from 'next/navigation';

interface IDTO {
  login: string;
  password: string;
}

const PanelLoginComponent = () => {
  const [currentBgImage, setCurrentBgImage] =
    useState<StaticImageData>(carBanner);

  const router = useRouter();

  useEffect(() => {
    handleBgImage();
  }, []);

  function handleBgImage() {
    const options: Array<StaticImageData> = [carBanner];
    setInterval(() => {
      var imagePos = Math.floor(Math.random() * options?.length);
      setCurrentBgImage(options[imagePos]);
    }, 5000);
  }

  function checkCredentials(values: any) {
    const errors: { email?: string; senha?: string } = {};

    if (values?.email !== 'admin@consorcio.com') {
      errors.email = 'E-mail inválido!';
    }
    if (values?.senha !== 'consorcio123') {
      errors.senha = 'Senha inválida!';
    }

    return errors;
  }

  return (
    <S.Container>
      <S.RightWrapper>
        <div className="bgImageWrapper">
          <Image
            className="bgImageWithBlur"
            alt="imagem"
            src={currentBgImage}
            objectFit="cover"
            fill
          />
        </div>
        <div className="columnGreen"></div>
      </S.RightWrapper>

      <Formik
        initialValues={{
          email: '',
          senha: ''
        }}
        validationSchema={loginSchema}
        validate={checkCredentials}
        onSubmit={(values) => {
          if (values?.email === 'admin@consorcio.com')
            if (values?.senha === 'consorcio123')
              cookieClass.setCookie(
                'AuthorizedAdminConsorcio',
                'Abzmfoi+65Afdia'
              );
          router.push('/painel/contemplados');
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <S.FormWrapper>
            <Form onSubmit={handleSubmit} className="panelAccess">
              <div className="logoGreenCasaAmazonia">
                <DefaultLogo />
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
