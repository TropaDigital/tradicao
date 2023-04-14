'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import MainTitle from '@/components/UI/MainTitle';

import Regulation from '../../../../public/images/regulamento_bg.jpeg';

// Styles
import * as S from './styles';

export default function Regulamento() {
  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageAlt="Imagem de uma mão assinando um contrato"
          imageSrc={Regulation}
        />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Regulamento geral" />
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <S.RegulationContainer>
          <object
            data="https://bucket.backendtropa.com.br/file/098b994c-e5ee-4fa9-84e3-b1793deadc85"
            type="application/pdf"
            height="800px"
            width="100%"
            aria-controls="off"
            name="Regulamento Consórcio Tradição"
          >
            <p>Não foi possível mostrar o Regulamento</p>
          </object>
        </S.RegulationContainer>
      </CenterWrapper>
    </>
  );
}
