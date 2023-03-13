'use client';

import HeroSkew from '@/components/pages/Home/HeroSkew';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllDemonstrations } from '@/services/demosntracoes/GET';
import * as S from './styles';
import GraphicDemonstrations from "../../../../public/images/demonstracoes_bg.png"
import SkewContainer from '@/components/shared/SkewContainer';

const DemonstracoesPage = () => {
  const { allDemonstrations } = useGetAllDemonstrations();

  console.log(allDemonstrations);

  return (
    <>
    <SkewContainer size="tiny" imageSrc={GraphicDemonstrations} imageAlt="Imamge de gráficos" />
      <S.Container>
        <MainTitle
          title="Demonstrações Financeiras"
          subtitle="Escolha abaixo o demonstrativo desejado"
        />

        <S.DemonstrationsListContainer>
          <ul>
            {allDemonstrations?.map((demo) => {
              return (
                <li>
                  <Button radius="rounded" buttonWidth={555} degrade>
                    {demo?.titulo}
                  </Button>
                </li>
              );
            })}
          </ul>
        </S.DemonstrationsListContainer>
      </S.Container>
    </>
  );
};

export default DemonstracoesPage;
