import Image from 'next/image';
import React from 'react';
import { ISkewContainer } from '../../../shared/SkewContainer/types';
import * as S from './styles';

const SkewContainerFiltered = ({ imageAlt, imageSrc, size }: ISkewContainer) => {
  return (
    <S.Container>
      <S.SolidBackground />
      <S.SkewContainer size={size}>
        <Image src={imageSrc} alt={imageAlt} className="skewImage" />
      </S.SkewContainer>
    </S.Container>
  );
};

export default SkewContainerFiltered;
