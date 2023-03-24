// React
import React from 'react';

// Next
import Image from 'next/image';

// Styles
import { ISkewContainer } from '../../../shared/SkewContainer/types';
import * as S from './styles';

// Images
import Logo from '../../../../../public/images/WhiteLogo.png'

const SkewContainerFiltered = ({ imageAlt, imageSrc, size }: ISkewContainer) => {
  return (
    <S.Container>
      <S.SolidBackground />
      <S.SkewContainer size={size}>
        <Image src={imageSrc} alt={imageAlt} className="skewImage" />
        <div className="logo-mask">
          <Image src={Logo} alt={'Logo da Universidade Tradição'}/>
        </div>
      </S.SkewContainer>
    </S.Container>
  );
};

export default SkewContainerFiltered;
