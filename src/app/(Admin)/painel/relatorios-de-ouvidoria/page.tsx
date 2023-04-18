'use client';

import { SearchIcon } from '@/assets/icons';
import FormDemonstracoes from '@/components/pages/Painel/components/forms/FormDemonstracoes';
import FormRelatories from '@/components/pages/Painel/components/forms/FormRelatories';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetlAllRelatorios } from '@/services/relatorios/GET/useGetAllRelatiorios';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import * as S from '../styles';

const RelatoriosPage = () => {
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
      key: 'pdfData',
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
  const [searchRelatorio, setSearchRelatorio] = useState('');
  const [actualPage, setActualPage] = useState(1);

  const { allRelatories } = useGetlAllRelatorios(
    searchRelatorio + `limit=5&page=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchRelatorio(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchRelatorio('');
    },
    // delay in ms
    300
  );

  useEffect(() => {
    if (allRelatories?.dataPaginada?.length < 0) {
      setActualPage((state) => state - 1);
    }
  }, [allRelatories]);

  return (
    <>
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormRelatories
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}
      <S.HeaderDashboard>
        <HeaderPage title="Relatórios de Ouvidoria" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar Relatório
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        header={headerTable}
        title={'Lista de Relatórios'}
        data={allRelatories?.dataPaginada}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por Relatório"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={allRelatories}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default RelatoriosPage;
