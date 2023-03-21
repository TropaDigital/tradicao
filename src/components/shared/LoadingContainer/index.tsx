import CenterWrapper from '@/components/global/CenterWrapper';
import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import LoadingIcon from '../../../assets/images/Loading.svg';

const LoadingContainer = () => {
  return (
    <CenterWrapper>
      <S.LoadingContainer>
        <Image src={LoadingIcon} alt="Loading Icon..." />
      </S.LoadingContainer>
    </CenterWrapper>
  );
};

export default LoadingContainer;
