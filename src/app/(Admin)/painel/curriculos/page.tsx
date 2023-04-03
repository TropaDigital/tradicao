'use client';

import { SearchIcon } from '@/assets/icons';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllCandidates } from '@/services/trabalhe-conosco/GET/useGetAllCurriculos';
import { Pagination } from '@mui/material';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
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

  const [actualPage, setActualPage] = useState<number>(1);
  const [searchCandidato, setSearchCandidato] = useState<string>('');

  const { allCandidates } = useGetAllCandidates(
    `${searchCandidato}currentPage=${actualPage}&perPage=10`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchCandidato(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchCandidato('');
    },
    // delay in ms
    300
  );

  return (
    <>
      <S.HeaderDashboard>
        <HeaderPage title="Currículos" />
      </S.HeaderDashboard>
      <Table
        title="Lista de Currículos"
        header={headerTable}
        data={allCandidates?.result}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por vaga ou candidato"
            name="search"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={allCandidates}
        handlePagination={handlePageChange}
        page={actualPage}
      />
    </>
  );
};

export default CurriculosPage;
