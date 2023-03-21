'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import React from 'react';
import * as S from './styles';
import { DefaultLogo } from '../../../assets/icons';

const LoadingContainer = () => {
  return (
    <CenterWrapper>
      <S.LoadingContainer>
        <div className="icon-container">
          <DefaultLogo />
        </div>
        <div className="loading-ball"></div>
      </S.LoadingContainer>
    </CenterWrapper>
  );
};

export default LoadingContainer;
