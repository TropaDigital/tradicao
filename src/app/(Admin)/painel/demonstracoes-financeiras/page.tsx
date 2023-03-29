'use client';

import { SearchIcon } from '@/assets/icons';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import DefaultInput from '@/components/UI/DefaultInput';
import React from 'react';

const DemonstracoesPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data Criação',
      type: 'date'
    },
    {
      key: 'titulo',
      label: 'Título',
      type: 'string'
    },
    {
      key: 'file',
      label: 'Arquivo PDF',
      type: 'filePdf'
    },
    {
      key: 'status',
      label: 'Status',
      type: 'status'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  return (
    <>
      <HeaderPage title="Demonstrações Financeiras" />
      <Table
        header={headerTable}
        title={'Lista de Demonstrações'}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por demonstrações"
          />
        }
      />
    </>
  );
};

export default DemonstracoesPage;
