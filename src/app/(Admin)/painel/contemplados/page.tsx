'use client';

import { SearchIcon } from '@/assets/icons';
import FormContemplados from '@/components/pages/Painel/components/forms/FormContemplados';
import FormProduct from '@/components/pages/Painel/components/forms/FormContemplados';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllContemplados } from '@/services/contemplados/GET/useGetAllContemplados';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

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

  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>(
    null
  );
  const [searchContemplado, setSerachContemplado] = useState<string>('');
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
      setSerachContemplado(value);
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px'
        }}
      >
        <HeaderPage title="Contemplados" />
        <div style={{ display: 'flex' }}>
          <Button
            style={{ padding: '10px 30px' }}
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar contemplado
          </Button>
        </div>
      </div>
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
      {allContemplados?.paginas > 1 && (
        <Pagination
          page={actualPage}
          onChange={handlePageChange}
          count={allContemplados?.paginas}
          defaultPage={1}
          color="primary"
          shape="rounded"
        />
      )}
    </>
  );
};

export default ContempladosPage;
