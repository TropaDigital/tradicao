'use client';

import FormAssembleia from '@/components/pages/Painel/components/forms/FormAssembleia';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import { useGetAllAssembleias } from '@/services/assembleia/GET/useGetAllAssembleia';
import React, { useEffect, useState } from 'react';
import { HeaderDashboard } from '../styles';

const AssembleiaPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'titulo',
      label: 'Assembleia',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [actualPage, setActualPage] = useState<number>(1);
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>(
    null
  );

  const { allAssembleias } = useGetAllAssembleias(
    '?' + query + `ordem=desc&perPage=10&currentPage=${actualPage}`
  );

  useEffect(() => {
    setActualPage(1);
  }, [query]);

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
          <FormAssembleia
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}

      <HeaderDashboard>
        <HeaderPage title="Resultado de Assembleias" />
        <div className="buttonWrapper">
          <Button
            degrade
            color="secondary"
            radius="rounded"
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
          >
            + Criar Assembleia
          </Button>
        </div>
      </HeaderDashboard>
      <Table
        data={allAssembleias?.result}
        header={headerTable}
        title="Todas as Assembleias"
        search={
          <SelectDefault
            label="Filtrar"
            onChange={(e) =>
              e?.target?.value !== ''
                ? setQuery(`tipo=${e?.target?.value}&`)
                : setQuery('')
            }
          >
            <option value="">Escolha um filtro</option>
            <option value="excluido">Excluídos</option>
            <option value="contemplados">Contemplados</option>
            <option value="suplencia">Suplência</option>
          </SelectDefault>
        }
      />
      <PaginationData
        data={allAssembleias}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default AssembleiaPage;
