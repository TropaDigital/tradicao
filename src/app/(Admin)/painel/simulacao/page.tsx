'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import { useGetAllSimulacao } from '@/services/simulacao/GET/useGetAllSimulacao';
import React, { useState } from 'react';
import { HeaderDashboard } from '../styles';

const SimulacaoPage = () => {
  const headerTable = [
    {
      type: 'date',
      label: 'Data de Criação',
      key: 'criado'
    },
    {
      type: 'string',
      label: 'Nome',
      key: 'nome'
    },
    {
      type: 'string',
      label: 'CPF',
      key: 'cpf'
    },
    {
      type: 'string',
      label: 'Email',
      key: 'email'
    },
    {
      type: 'string',
      label: 'Celular',
      key: 'celular'
    },
    {
      type: 'string',
      label: 'Conquista',
      key: 'tipoDeConsorcio'
    },
    {
      type: 'string',
      label: 'Valor',
      key: 'valorDoBem'
    },
    {
      type: 'string',
      label: 'Tipo de Plano',
      key: 'tipoDePlano'
    },
    {
      type: 'options',
      label: '',
      key: ''
    }
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { allSimulacao } = useGetAllSimulacao(
    `?currentPage=${currentPage}&perPage=10`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Simulação" />
      </HeaderDashboard>

      <Table
        data={allSimulacao?.result}
        title={'Todas as simulações'}
        header={headerTable}
      />

      <PaginationData
        data={allSimulacao}
        handlePagination={handlePageChange}
        page={currentPage}
      />
    </>
  );
};

export default SimulacaoPage;
