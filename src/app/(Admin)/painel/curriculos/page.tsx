'use client';

import { SearchIcon, SpreadsheetFileIcon } from '@/assets/icons';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import API from '@/services/api';
import { useGetAllCandidates } from '@/services/trabalhe-conosco/GET/useGetAllCurriculos';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';
import { downloadSpreadSheet } from '@/utils/downloadSpreadSheet';
import { Pagination } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
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
      type: 'file-pdf'
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

  useEffect(() => {
    if (allCandidates?.result?.length < 0) {
      setActualPage((state) => state - 1);
    }
  }, [allCandidates]);

  return (
    <>
      <S.HeaderDashboard>
        <HeaderPage title="Currículos" />

        <div className="buttonWrapper">
          <Button
            degrade
            color="secondary"
            radius="rounded"
            className="styledButton"
            onClick={() =>
              downloadSpreadSheet(
                '/curriculo-download?ordem=desc',
                `Planilha Currículos - ${moment().format('DD-MM-YYYY')}`
              )
            }
          >
            <SpreadsheetFileIcon size={18} />
            Baixar Dados
          </Button>
        </div>
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
