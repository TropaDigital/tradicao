'use client';

// Next
import Link from 'next/link';

// React
import React, { useState } from 'react';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import MainTitle from '@/components/UI/MainTitle';
import ComplaintForm from '@/components/pages/Canal-de-denuncia/ComplaintForm';

// Images
import ComplianceBg from '../../../../public/images/compliance.jpg';

// Styles
import * as S from './styles';

const CompliancePage = () => {
  const [isComplaintFormOpen, setIsComplaintFormOpen] =
    useState<boolean>(false);

  const closeFormComplaint = () => {
    setIsComplaintFormOpen(false);
  };

  return (
    <>
      <SkewContainer imageSrc={ComplianceBg} imageAlt="Pessoas dando as mãos" />
      <CenterWrapper>
        <S.Container data-aos="fade-up">
          <MainTitle title="Canal de Comunicação" />
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
              algum colaborador, representante, fornecedor ou cliente do
              Consórcio Tradição, sinta-se seguro para nos relatar o ocorrido.
              Este canal é totalmente confidencial e caso deseje, pode-se
              realizar uma denúncia anônima. Iremos analisar e investigar todas
              as denúncias, para darmos a devida tratativa ao ocorrido.
            </p>
          </S.TextContainer>

          <S.ButtonsWrapper>
            <Button degrade>
              <Link
                href="https://consorciotradicao.becompliance.com/canal-etica/canal-denuncias?origin=%242y%2410%24vDOtzlOH1iiZPMcSHdYQl.wBKTwexv53A90IsFq%2FsLrEPRoiB6t5a"
                style={{ color: 'white' }}
              >
                Acessar Canal de Ética
              </Link>
            </Button>
          </S.ButtonsWrapper>
        </S.Container>

        <ComplaintForm
          isOpen={isComplaintFormOpen}
          setOpenState={setIsComplaintFormOpen}
          closeFormComplaint={closeFormComplaint}
        />
      </CenterWrapper>
    </>
  );
};

export default CompliancePage;
