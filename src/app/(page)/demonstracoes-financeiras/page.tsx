'use client';

import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllDemonstrations } from '@/services/demonstracoes/GET';
import * as S from './styles';
import GraphicDemonstrations from '../../../../public/images/demonstracoes_bg.jpg';
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import Link from 'next/link';

const DemonstracoesPage = () => {
  const { allDemonstrations } = useGetAllDemonstrations('');

  return (
    <>
      <SkewContainer
        imageSrc={GraphicDemonstrations}
        imageAlt="Imagem de gráficos"
      />
      <S.Container data-aos="fade-up">
        <S.TitleContainer>
          <MainTitle title="Demonstrações Financeiras" />
          <p className="subtitle">Escolha abaixo o demonstrativo desejado</p>
        </S.TitleContainer>

        <CenterWrapper>
          <ul className="demonstracao-container" data-aos="fade-up">
            {allDemonstrations?.dataPaginada?.map((demo) => {
              if (demo.status === 'Inativo') return;
              return (
                <li className="button-wrapper" key={demo.id_demo_financeira}>
                  <Button
                    radius="rounded"
                    degrade
                    className="demonstracao-button"
                  >
                    <Link
                      href={`/demonstracoes-financeiras/${demo?.demonstracaoPDF[0]?.url_pdf
                        ?.split('/')
                        ?.pop()}`}
                    >
                      {demo?.titulo}
                    </Link>
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
