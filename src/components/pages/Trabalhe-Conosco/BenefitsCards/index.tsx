// Next
import Image from 'next/image';

// React
import React from 'react';
import * as S from './styles';

// Types
import { BenefitsCardsProps } from './types';

const BenefitsCard = ({ image, title }: BenefitsCardsProps) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <Image
          src={image}
          alt={`Imagem do card sobre ${title}`}
          height={165}
          width={155}
          className="image"
        />
      </S.ImageWrapper>

      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  );
};

export default BenefitsCard;
