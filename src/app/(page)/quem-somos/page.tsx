'use client';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import * as S from './styles';

import bgAboutUsImage from '../../../../public/images/aboutUsHeader.png';

export default function QuemSomos() {
  return (
    <S.QuemSomosContainer>
      <SkewContainer imageAlt="imagem teste" imageSrc={bgAboutUsImage} size={'medium'}/>
      <CenterWrapper>
        <p>teste</p>
      </CenterWrapper>
    </S.QuemSomosContainer>
  );
}
