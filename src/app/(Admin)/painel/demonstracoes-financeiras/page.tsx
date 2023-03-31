'use client';

import { SearchIcon } from '@/assets/icons';
import FormDemonstracoes from '@/components/pages/Painel/components/forms/FormDemonstracoes';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllDemonstrations } from '@/services/demonstracoes/GET';
import { Pagination } from '@mui/material';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import * as S from '../styles';

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
      key: 'demonstracaoPDF',
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

  const [modalOpen, setModalOpen] = useState<
    'publicar' | 'editar' | undefined | null
  >();
  const [searchDemonstracao, setSearchDemonstracao] = useState('');
  const [actualPage, setActualPage] = useState(1);

  const { allDemonstrations } = useGetAllDemonstrations(
    searchDemonstracao + `limit=5&page=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchDemonstracao(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchDemonstracao('');
    },
    // delay in ms
    300
  );

  return (
    <>
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormDemonstracoes
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}
      <S.HeaderDashboard>
        <HeaderPage title="Demonstrações Financeiras" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar Demonstração
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        header={headerTable}
        title={'Lista de Demonstrações'}
        data={allDemonstrations?.dataPaginada}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por demonstrações"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={allDemonstrations}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default DemonstracoesPage;
