'use client';

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
      key: 'title',
      label: 'Título',
      type: 'string'
    },
    {
      key: 'file',
      label: 'Arquivo PDF',
      type: 'file'
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
      <Table
        header={headerTable}
        title={'Lista de Demonstrações Financeiras'}
        search={<DefaultInput />}
      />
    </>
  );
};

export default DemonstracoesPage;
