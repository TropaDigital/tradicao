'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../../../public/m10.png';
import * as S from './styles';

const inter = Inter({ subsets: ['latin'] });

import contato_bg from '../../../../public/images/contato_bg.png';
import CenterWrapper from '@/components/global/CenterWrapper';
import Link from 'next/link';
import SkewContainer from '@/components/shared/SkewContainer';

export default function Contato() {
  const CALL_CENTERS_NUMBER: Array<string> = [
    '(11) 4003-5090',
    '0800-877-0020',
    '(11) 2928-4800'
  ];

  return (
    <S.Container>
      <SkewContainer
        imageSrc={contato_bg}
        imageAlt="Imagem de operadores de telemarketing"
        size="medium"
      />
      <CenterWrapper>
        <h1 className="titleContactPage">Contato com a Tradição</h1>
        <S.MainWrapper>
          <S.LeftContent>
            <S.ContactSubtitle>Central de Atendimento</S.ContactSubtitle>
            <ul>
              {CALL_CENTERS_NUMBER.map((row: string, index) => {
                return (
                  <Link key={index} href={`tel:${row}`}>
                    <S.ContactText>{row}</S.ContactText>
                  </Link>
                );
              })}
            </ul>
            <S.ContactSubtitle>SAC</S.ContactSubtitle>

            <Link href={`mailto:sac@consorciotradicao.com.br`}>
              <S.ContactText>sac@consorciotradicao.com.br</S.ContactText>
            </Link>

            <S.ContactSubtitle>Central de Atendimento</S.ContactSubtitle>
            <ul>
              <Link href={`tel:0800-770-4139`}>
                <S.ContactText>0800-770-4139</S.ContactText>
              </Link>
            </ul>

            <S.ContactSubtitle>Endereço</S.ContactSubtitle>
            <S.ContactText>
              Alameda: Rio Negro, 1084 <br /> 12º andar – Alphaville, Barueri/SP{' '}
              <br /> CEP: 06454-000
            </S.ContactText>

            <S.ServiceCard>
              <p className="titleCard">Atendimento na CNP consórcio</p>
              <p className="textCard">
                <Link href={`tel:08002722021`}>0800 272 2021</Link> sugestões,
                elogios, esclarecimentos e reclamações www.cnpconsorcio.com.br
              </p>
            </S.ServiceCard>
          </S.LeftContent>

          <S.MapsContainer>
            <S.ContactSubtitle>Onde nos encontrar</S.ContactSubtitle>
            <div className="mapsWrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0051203128646!2d-46.850369384494904!3d-23.496325065080153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf023ced138219%3A0x3ed090e02a53ef5d!2sAl.%20Rio%20Negro%2C%201084%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006454-000!5e0!3m2!1sen!2sbr!4v1678478470361!5m2!1sen!2sbr"
                style={{ border: '0px' }}
                loading="lazy"
              ></iframe>
            </div>
          </S.MapsContainer>
        </S.MainWrapper>
      </CenterWrapper>
    </S.Container>
  );
}
