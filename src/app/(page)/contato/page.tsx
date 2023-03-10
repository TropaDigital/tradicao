'use client';
import { Inter } from 'next/font/google';
import { Container } from './styles';

const inter = Inter({ subsets: ['latin'] });

import contato_bg from '../../../../public/images/contato_bg.png';
import HeaderSkew from '@/components/shared/SkewImage/HeaderSkew';

export default function Contato() {
  return (
    <Container>
      <HeaderSkew
      altBackgroundImage='imagem de fundo'
      backgroundImage={contato_bg}/>
    </Container>
  );
}
