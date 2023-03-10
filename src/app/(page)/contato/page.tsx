'use client';
import { Inter } from 'next/font/google';
import { Container } from './styles';

const inter = Inter({ subsets: ['latin'] });

import contato_bg from '../../../../public/images/contato_bg.png';
import HeaderSkew from '@/components/shared/HeaderSkew';
import CenterWrapper from '@/components/global/CenterWrapper';

export default function Contato() {
  return (
    <Container>
      <HeaderSkew
      altBackgroundImage='imagem de fundo'
      backgroundImage={contato_bg}/>
      <CenterWrapper>
        <p>teste</p>
      </CenterWrapper>
    </Container>
  );
}
