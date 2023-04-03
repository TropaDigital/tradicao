'use client';

import { SearchIcon } from '@/assets/icons';
import FormContemplados from '@/components/pages/Painel/components/forms/FormContemplados';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllContemplados } from '@/services/contemplados/GET/useGetAllContemplados';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import * as S from '../styles';

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
      type: 'longText'
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

  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>(
    null
  );
  const [searchContemplado, setSearchContemplado] = useState<string>('');
  const [actualPage, setActualPage] = useState<number>(1);

  const { allContemplados } = useGetAllContemplados(
    searchContemplado + `limit=5&page=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchContemplado(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchContemplado('');
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
          <FormContemplados
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}
      <S.HeaderDashboard>
        <HeaderPage title="Contemplados" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar contemplado
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        title="Lista de contemplados"
        header={headerTable}
        data={allContemplados?.dataPaginada}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por contemplados"
            onChange={debounced}
            name="search"
          />
        }
      />
      <PaginationData
        data={allContemplados}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default ContempladosPage;
