'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import ComplianceBg from '../../../../public/images/compliance_bg.png';
import React from 'react';
import MainTitle from '@/components/UI/MainTitle';
import Button from '@/components/UI/Button';
import * as S from './styles';

const CompliancePage = () => {
  return (
    <>
      <SkewContainer
        imageSrc={ComplianceBg}
        imageAlt="Homem em uma mesa trabalhando"
        size="tiny"
      />
      <CenterWrapper>
        <S.Container>
          <MainTitle title="Canal de Denúncia" />
          <S.TextContainer>
            <p className="compliance-text">
              Temos como objetivo estabelecer um ambiente com condutas éticas,
              com respeito, transparência e honestidade, para agregar valor aos
              nossos colaboradores, parceiros comerciais e clientes.
            </p>

            <p className="compliance-text">
              Desta forma, não compactuamos com qualquer conduta antiética, ou
              que desobedeça às legislações vigentes no combate à prevenção da
              lavagem de dinheiro, ou que corroboram com qualquer ato ilícito.
            </p>

            <p className="compliance-text">
              Caso tenha relatado alguma situação desse nível praticada por
              algum colaborador, representante, fornecedor ou cliente da
              tradição. Sinta-se seguro para nos relatar o ocorrido. este canal
              é totalmente confidencial e caso deseje, pode-se realizar uma
              denúncia anônima. Iremos analisar e investigar todas as denúncias,
              para darmos a devida tratativa ao ocorrido.
            </p>
          </S.TextContainer>

          <S.ButtonsWrapper>
            {/* TODO: Add funcionalidade */}
            <Button degrade>Preencher Novo Formulário</Button>
            <Button degrade>Consulte a Situação de sua Denúncia</Button>
          </S.ButtonsWrapper>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default CompliancePage;
