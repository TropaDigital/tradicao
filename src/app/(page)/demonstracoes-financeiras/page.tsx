'use client';

import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllDemonstrations } from '@/services/demonstracoes/GET';
import * as S from './styles';
import GraphicDemonstrations from '../../../../public/images/demonstracoes_bg.png';
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';

const DemonstracoesPage = () => {
  const { allDemonstrations } = useGetAllDemonstrations();

  return (
    <>
      <SkewContainer
        imageSrc={GraphicDemonstrations}
        imageAlt="Imamge de gráficos"
      />
      <S.Container>
        <S.TitleContainer>
          <MainTitle title="Demonstrações Financeiras" />
          <p className="subtitle">Escolha abaixo o demonstrativo desejado</p>
        </S.TitleContainer>

        <CenterWrapper>
          <ul className="demonstracao-container">
            {allDemonstrations?.map((demo) => {
              return (
                <li className="button-wrapper">
                  <Button
                    radius="rounded"
                    degrade
                    onClick={() =>
                      downloadFileFromExternalLink(
                        demo?.demonstracaoPDF[0]?.url_pdf,
                        demo?.titulo
                      )
                    }
                    className="demonstracao-button"
                  >
                    {demo?.titulo}
                  </Button>
                </li>
              );
            })}
          </ul>
        </CenterWrapper>
      </S.Container>
    </>
  );
};

export default DemonstracoesPage;
