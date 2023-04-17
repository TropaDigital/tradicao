'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import { useGetAllAssembleias } from '@/services/assembleia/GET/useGetAllAssembleia';
import React, { useState } from 'react';
import { HeaderDashboard } from '../styles';

const AssembleiaPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'titulo',
      label: 'Assembleia',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [actualPage, setActualPage] = useState<number>(1);
  const [query, setQuery] = useState('');

  const { allAssembleias } = useGetAllAssembleias(
    '?' + query + `perPage=10&currentPage=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const SelectCategory = () => {
    return (
      <SelectDefault
        label="Filtrar"
        onChange={(e) =>
          e?.target?.value !== ''
            ? setQuery(`tipo=${e?.target?.value}&`)
            : setQuery('')
        }
      >
        <option value="">Escolha um filtro</option>
        <option value="excluido">Excluídos</option>
        <option value="contemplados">Contemplados</option>
        <option value="suplencia">Suplência</option>
      </SelectDefault>
    );
  };

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Resultado de Assembleias" />
        <div className="buttonWrapper">
          <Button
            degrade
            color="secondary"
            radius="rounded"
            className="styledButton"
          >
            + Criar Assembleia
          </Button>
        </div>
      </HeaderDashboard>
      <Table
        data={allAssembleias?.result}
        header={headerTable}
        title="Todas as Assembleias"
        search={<SelectCategory />}
      />
      <PaginationData
        data={allAssembleias}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default AssembleiaPage;
