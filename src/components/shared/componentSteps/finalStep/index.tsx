// React
import React from 'react';

// Styles
import * as S from './styles';

// Icons
import { ShieldCheckMarkIcon } from '@/assets/icons';

const FinalStep = () => {
  return (
    <S.Container>
      <ShieldCheckMarkIcon />

      <S.Title>Simulação Realizada com sucesso!</S.Title>

      <S.FinalText>
        Um representante autorizado entrará em contato com você em breve para
        fornecer mais informações.
      </S.FinalText>
    </S.Container>
  );
};

export default FinalStep;
