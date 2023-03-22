'use client';

import * as S from './styles';
import CenterWrapper from '@/components/global/CenterWrapper';
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
