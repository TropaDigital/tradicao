'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import React from 'react';
import GraphicsBg from '../../../../public/images/demonstracoes_bg.png';
import * as S from './styles';

const RelatoriosPage = () => {
  return (
    <>
      <SkewContainer
        imageSrc={GraphicsBg}
        imageAlt="Imagem de gráficos"
        size="medium"
      />

      <CenterWrapper>
        <S.Container>
          <S.TitleContainer>
            <MainTitle title="Relatórios de Ouvidoria" />
            <p className="subtitle">Escolha abaixo o relatório desejado</p>
          </S.TitleContainer>

          <S.ButtonsContainer>
            <Button degrade radius="rounded" className="relatorio-button">
              1º semestre 2020
            </Button>
            <Button degrade radius="rounded" className="relatorio-button">
              2º semestre 2020
            </Button>
            <Button degrade radius="rounded" className="relatorio-button">
              1º semestre 2021
            </Button>
            <Button degrade radius="rounded" className="relatorio-button">
              2º semestre 2021
            </Button>
          </S.ButtonsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default RelatoriosPage;
