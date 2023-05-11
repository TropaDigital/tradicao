'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetlAllRelatorios } from '@/services/relatorios/GET/useGetAllRelatiorios';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';
import Link from 'next/link';
import React from 'react';
import GraphicsBg from '../../../../public/images/demonstracoes_bg.jpg';
import * as S from './styles';

const RelatoriosPage = () => {
  const { allRelatories } = useGetlAllRelatorios('');

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
            {allRelatories?.dataPaginada?.map((relatorio) => {
              if (relatorio?.status === 'Inativo') return;
              return (
                <>
                  <Button
                    degrade
                    radius="rounded"
                    className="relatorio-button"
                    key={relatorio?.id_relatorio}
                  >
                    <Link
                      href={`/relatorios-de-ouvidoria/${relatorio?.pdfData[0]?.url_pdf
                        ?.split('/')
                        ?.pop()}`}
                    >
                      {relatorio?.titulo}
                    </Link>
                  </Button>
                </>
              );
            })}
          </S.ButtonsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default RelatoriosPage;
