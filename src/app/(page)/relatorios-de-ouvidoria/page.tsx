'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetlAllRelatorios } from '@/services/relatorios/GET/useGetAllRelatiorios';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';
import React from 'react';
import GraphicsBg from '../../../../public/images/demonstracoes_bg.png';
import * as S from './styles';

const RelatoriosPage = () => {
  const { allRelatories } = useGetlAllRelatorios();

  return (
    <>
      <SkewContainer imageSrc={GraphicsBg} imageAlt="Imagem de gráficos" />

      <CenterWrapper>
        <S.Container>
          <S.TitleContainer>
            <MainTitle title="Relatórios de Ouvidoria" />
            <p className="subtitle">Escolha abaixo o relatório desejado</p>
          </S.TitleContainer>
          <S.ButtonsContainer>
            {allRelatories?.map((relatorio) => (
              <>
                <Button
                  degrade
                  radius="rounded"
                  className="relatorio-button"
                  onClick={() =>
                    downloadFileFromExternalLink(
                      relatorio?.pdfData[0]['url_pdf'],
                      relatorio?.titulo
                    )
                  }
                >
                  {relatorio?.titulo}
                </Button>
              </>
            ))}
          </S.ButtonsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default RelatoriosPage;
