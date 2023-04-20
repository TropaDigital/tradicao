'use client';

import FormContempladoAssembleia from '@/components/pages/Painel/components/forms/FormContempladoAssembleia';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { useGetAllAssembleiaContemplados } from '@/services/assembleia-contemplado/GET/useGetAllAssembleiaContemplados';
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
  const [actualPage, setActualPage] = useState(1);
  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAssembleia = localStorage?.getItem('id_assembleia');
      setQuery(`?ordem=desc&id_assembleia=${currentAssembleia}&`);
    }
  }, []);

  const { allContemplados } = useGetAllAssembleiaContemplados(
    `${query}perPage=10&currentPage=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  return (
    <>
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormContempladoAssembleia
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}

      <HeaderDashboard>
        <HeaderPage title="Visualizar Assembleia" />

        <div className="buttonWrapper">
          <Button
            color="secondary"
            className="styledButton"
            radius="rounded"
            degrade
            onClick={() => setModalOpen('publicar')}
          >
            + Adicionar Pessoa
          </Button>
        </div>
      </HeaderDashboard>

      <Table
        data={allContemplados?.result}
        header={headerTable}
        title={`Resultado da Assembleia`}
      />

      <PaginationData
        data={allContemplados}
        handlePagination={handlePageChange}
        page={actualPage}
      />
    </>
  );
};

export default ViewAssembleiaPage;
