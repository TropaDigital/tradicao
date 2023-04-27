'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import MainTitle from '@/components/UI/MainTitle';
import { useGetRegulamento } from '@/services/regulamento/GET/useGetRegulamento';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Imagens
import Regulation from '../../../../public/images/regulamento.jpg';

// Styles
import * as S from './styles';

export default function Regulamento() {
  const { regulamento } = useGetRegulamento();

  const [regulamentoUrl, setRegulamentoUrl] = useState<string>('');

  useEffect(() => {
    if (regulamento) {
      setRegulamentoUrl(regulamento);
    }
  }, [regulamento]);

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
            type="application/pdf"
            height="800px"
            width="100%"
            name="Regulamento Consórcio Tradição"
            data={regulamentoUrl}
          >
            <p>
              Não foi possível mostrar o{' '}
              <Link href={regulamentoUrl} download="Regulamento-Geral">
                Regulamento
              </Link>
            </p>
          </object>
        </S.RegulationContainer>
      </CenterWrapper>
    </>
  );
}
