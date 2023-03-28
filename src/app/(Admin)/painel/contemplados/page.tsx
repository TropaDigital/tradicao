'use client';

import { SearchIcon } from '@/assets/icons';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import DefaultInput from '@/components/UI/DefaultInput';
import React from 'react';

const ContempladosPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'contempladoImagem',
      label: 'Foto',
      type: 'image'
    },
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'depoimento',
      label: 'Depoimento',
      type: 'string'
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
      <HeaderPage title="Contemplados" />
      <Table
        title="Lista de contemplados"
        header={headerTable}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por contemplados"
          />
        }
      />
    </>
  );
};

export default ContempladosPage;
