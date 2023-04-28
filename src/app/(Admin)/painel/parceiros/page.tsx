'use client';

// React
import React, { useState } from 'react';

// Componentes
import { HeaderDashboard } from '../styles';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import Button from '@/components/UI/Button';
import PaginationData from '@/components/shared/PaginationData';

// Services
import { useGetAllParceiros } from '@/services/seja-um-parceiro/GET/useGetAllParceiros';

//Hooks
import { useDebouncedCallback } from 'use-debounce';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';

const ParceirosPage = () => {
  const headerTable = [
    {
      key: 'criado',
      label: 'Data de Cadastro',
      type: 'date'
    },
    {
      key: 'nome_da_empresa',
      label: 'Nome da Empresa',
      type: 'string'
    },
    {
      key: 'cnpj',
      label: 'CNPJ',
      type: 'string'
    },
    {
      key: 'email_de_contato',
      label: 'Email de Contato',
      type: 'string'
    },
    {
      key: 'telefone_de_contato',
      label: 'Telefone de Contato',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const { allParceiros } = useGetAllParceiros(
    `?${query}&currentPage=${currentPage}&perPage=10`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (e) => {
      setQuery(`pesquisa=${e?.target?.value}&`);
    },
    // delay in ms
    300
  );

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Parceiros" />

        <div className="buttonWrapper">
          <Button
            degrade
            radius="rounded"
            color="secondary"
            className="styledButton"
          >
            + Adicionar Parceiro
          </Button>
        </div>
      </HeaderDashboard>

      <Table
        header={headerTable}
        data={allParceiros?.result}
        title={'Todos os Parceiros'}
        search={
          <InputDefault
            label="Pesquisar"
            onChange={debounced}
            placeholder="Pesquisar por Nome/CNPJ"
          />
        }
      />

      <PaginationData
        data={allParceiros}
        page={currentPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default ParceirosPage;
