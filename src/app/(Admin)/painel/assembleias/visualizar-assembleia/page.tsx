'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { useGetAllAssembleias } from '@/services/assembleia/GET/useGetAllAssembleia';
import React, { useEffect, useState } from 'react';
import { HeaderDashboard } from '../../styles';

const ViewAssembleiaPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'grupo',
      label: 'Grupo',
      type: 'string'
    },
    {
      key: 'cota',
      label: 'Cota',
      type: 'string'
    },
    {
      key: 'tipo_de_contemplacao',
      label: 'Tipo de Contemplação',
      type: 'longText'
    },
    {
      key: 'representante',
      label: 'Representante',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [query, setQuery] = useState('');
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAssembleia = localStorage?.getItem('id_assembleia');
      setQuery(`-contemplados?ordem=desc&id_assembleia=${currentAssembleia}&`);
    }
  }, []);

  const { allAssembleias } = useGetAllAssembleias(
    query + `perPage=10&currentPage=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Visualizar Assembleia" />

        <Button color="secondary" degrade>
          + Adicionar Pessoa
        </Button>
      </HeaderDashboard>

      <Table
        data={allAssembleias?.result}
        header={headerTable}
        title={`Assembleia
        `}
      />

      <PaginationData
        data={allAssembleias}
        handlePagination={handlePageChange}
        page={actualPage}
      />
    </>
  );
};

export default ViewAssembleiaPage;
