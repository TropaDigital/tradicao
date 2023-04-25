import Image from 'next/image';
import React from 'react';
import { ISkewContainer } from './types';
import * as S from './styles';

const SkewContainer = ({ imageAlt, imageSrc }: ISkewContainer) => {
  return (
    <S.Container data-aos="fade-up">
      <S.SolidBackground />
      <S.SkewContainer>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="skewImage"
          placeholder="blur"
          priority
        />
      </S.SkewContainer>
    </S.Container>
  );
};

export default SkewContainer;
