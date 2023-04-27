'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import ComplianceBg from '../../../../public/images/compliance.jpg';
import React, { useState } from 'react';
import MainTitle from '@/components/UI/MainTitle';
import Button from '@/components/UI/Button';
import * as S from './styles';
import ComplaintForm from '@/components/pages/Canal-de-denuncia/ComplaintForm';
import FollowComplaintForm from '@/components/pages/Canal-de-denuncia/FollowComplaintForm';
import Link from 'next/link';

const CompliancePage = () => {
  const [isComplaintFormOpen, setIsComplaintFormOpen] =
    useState<boolean>(false);

  const closeFormComplaint = () => {
    setIsComplaintFormOpen(false);
  };

  return (
    <>
      <SkewContainer
        imageSrc={ComplianceBg}
        imageAlt="Homem em uma mesa trabalhando"
      />
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
