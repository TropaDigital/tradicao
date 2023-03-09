"use client"

import SkewImage from '@/components/shared/SkewImage';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Container } from './styles';

const inter = Inter({ subsets: ['latin'] });

import contato_bg from '../../../../public/images/contato_bg.png'

import HeroSkew from '@/components/pages/Home/HeroSkew';

export default function Contato() {
  return (
    <Container>
      <HeroSkew
      altBackgroundImage='imagem de fundo'
      backgroundImage={contato_bg} 
      />

      {/* <SkewImage
      alt='Imagem'
      src={contato_bg}
      /> */}
    </Container>
  );
}
