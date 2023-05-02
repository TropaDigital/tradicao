// React
import React from 'react';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Types
import { IPropertiesConsortium } from './types';

type ConsortiumTypes = {
  data: IPropertiesConsortium[];
};

const PropertiesConsortium = ({ data }: ConsortiumTypes) => {
  return (
    <S.PropertiesConsortiumType data-aos="fade-up">
      {data?.map((row) => (
        <S.ConsortiumCard key={row.id}>
          <S.ConsortiumCardImage>
            <Image width={165} height={155} src={row.image} alt={row.altImg} />
          </S.ConsortiumCardImage>
          <S.ConsortiumCardText>{row.title}</S.ConsortiumCardText>
        </S.ConsortiumCard>
      ))}
    </S.PropertiesConsortiumType>
  );
};

export default PropertiesConsortium;
