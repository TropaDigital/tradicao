'use client';

import React, { useState, useEffect, FormEvent } from 'react';

import Image, { StaticImageData } from 'next/image';
import * as S from './styles';

// import bgLoginAcai from '../../../../assets/images/bgLoginAcai.png';
// import bgLoginMandioca from '../../../../assets/images/bgLoginMandioca.png';
// import bgLoginChocolate from '../../../../assets/images/bgLoginChocolate.png';
// import bgLoginPeixe from '../../../../assets/images/bgLoginPeixe.png';

import carBanner from '../../../../public/images/car_banner.jpg';

import { DefaultLogo } from '@/assets/icons';
import Button from '@/components/UI/Button';

import { toast } from 'react-toastify';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { InputPassword } from '@/components/UI/Inputs/InputPassword';
// import useRouter from 'next/navigation';

// import CookiesClass from '../../../../utils/cookies';

interface IDTO {
  login: string;
  password: string;
}

const PanelLoginComponent = () => {
  const [currentBgImage, setCurrentBgImage] =
    useState<StaticImageData>(carBanner);
  const [DTO, setDTO] = useState<IDTO>({
    login: '',
    password: ''
  });

  // const router = useRouter();

  useEffect(() => {
    handleBgImage();
  }, []);

  function handleOnChange(pos: 'login' | 'password', value: string) {
    const newDTO: IDTO = DTO;
    newDTO[pos] = value;
    setDTO({ ...newDTO });
  }

  function handleBgImage() {
    const options: Array<StaticImageData> = [carBanner];
    setInterval(() => {
      var imagePos = Math.floor(Math.random() * options?.length);
      setCurrentBgImage(options[imagePos]);
    }, 5000);
  }

  async function checkDTO() {
    try {
      if (!DTO.login || !DTO.password)
        throw new Error('Todos os campos são obrigatórios');
      if (DTO.login != 'amazonia@teste.com')
        throw new Error('O login está incorreto');
      if (DTO.password !== 'Mud@r123')
        throw new Error('A senha está incorreta');

      // let cookie = await CookiesClass.setCookies();

      // router.push('/painel/produtos');

      console.log('Acerto');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  function handleSubmitAccessForm(e: FormEvent) {
    e.preventDefault();
    checkDTO();
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

      <S.FormWrapper>
        <form
          className="panelAccess"
          onSubmit={(e: FormEvent) => {
            handleSubmitAccessForm(e);
          }}
        >
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange('login', event?.target?.value);
              }}
              value={DTO?.login}
              placeholder="email@exemplo.com"
              type={'email'}
            />
          </div>
          <div className="inputWrapper">
            <InputPassword
              label="Senha"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange('password', event?.target?.value);
              }}
              value={DTO?.password}
              placeholder="Digite sua senha"
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
        </form>
      </S.FormWrapper>
    </S.Container>
  );
};

export default PanelLoginComponent;
