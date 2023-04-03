'use client';

import { SearchIcon } from '@/assets/icons';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllCandidates } from '@/services/trabalhe-conosco/GET/useGetAllCurriculos';
import React from 'react';
import * as S from '../styles';

const CurriculosPage = () => {
  const headerTable = [
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'vaga',
      label: 'Posição',
      type: 'string'
    },
    {
      key: 'curriculo_pdf',
      label: 'Currículo',
      type: 'file'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const { allCandidates } = useGetAllCandidates();

  return (
    <>
      <S.HeaderDashboard>
        <HeaderPage title="Currículos" />
      </S.HeaderDashboard>
      <Table
        title="Lista de Candidatos"
        header={headerTable}
        data={allCandidates}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por vaga"
            name="search"
          />
        }
      />
    </>
  );
};

export default CurriculosPage;
