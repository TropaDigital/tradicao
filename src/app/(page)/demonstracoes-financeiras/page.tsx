'use client';

import HeroSkew from '@/components/pages/Home/HeroSkew';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllDemonstrations } from '@/services/demosntracoes/GET';
import * as S from './styles';
import GraphicDemonstrations from "../../../../public/images/demonstracoes_bg.png"
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';

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

        <CenterWrapper>
          <ul className='demonstracao-container'>
            {allDemonstrations?.map((demo) => {
              return (
                <li>
                  <Button radius="rounded" degrade>
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
