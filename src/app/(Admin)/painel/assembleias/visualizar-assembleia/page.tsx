'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAssembleia = localStorage?.getItem('assembleia_id');
      setQuery(`-contemplados?assembleia_id=${currentAssembleia}`);
    }
  }, []);

  const { allAssembleias } = useGetAllAssembleias(query);

  console.log(allAssembleias);

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Visualizar Assembleia" />
      </HeaderDashboard>

      <Table
        data={allAssembleias?.result}
        header={headerTable}
        title={`Assembleia de ${allAssembleias?.result[0]?.titulo}`}
      />
    </>
  );
};

export default ViewAssembleiaPage;
