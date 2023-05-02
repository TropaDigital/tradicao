'use client';

import FormGrupos from '@/components/pages/Painel/components/forms/FormGrupos';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllGrupos } from '@/services/grupos-encerrados/GET/useGetAllGrupos';
import React, { useEffect, useState } from 'react';
import { HeaderDashboard } from '../styles';
import { useDebouncedCallback } from 'use-debounce';
import { ClipFileIcon } from '@/assets/icons';

const AssembleiaPage = () => {
  const headerTable = [
    {
      key: 'grupo',
      label: 'Grupo',
      type: 'string'
    },
    {
      key: 'data_encerramento',
      label: 'Data de Encerramento',
      type: 'date'
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

  const { allGrupos } = useGetAllGrupos(
    '?' +
      query +
      `ordem_tipo=grupo&ordem=desc&perPage=10&currentPage=${actualPage}`
  );

  useEffect(() => {
    setActualPage(1);
  }, [query]);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
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
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormGrupos
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}

      <HeaderDashboard>
        <HeaderPage title="Grupos Encerrados" />
        <div className="multiButtonsContainer">
          <div className="buttonWrapper">
            <Button
              degrade
              color="secondary"
              radius="rounded"
              className="styledButton"
            >
              <a href="/archives/exemplo-grupos-encerrados.ods" download>
                <ClipFileIcon size={18} />
                Baixar Modelo
              </a>
            </Button>
          </div>

          <div className="buttonWrapper">
            <Button
              degrade
              color="secondary"
              radius="rounded"
              className="styledButton"
              onClick={() => setModalOpen('publicar')}
            >
              + Atualizar Grupos Encerrados
            </Button>
          </div>
        </div>
      </HeaderDashboard>
      <Table
        data={allGrupos?.result}
        header={headerTable}
        title="Todos os Grupos"
        search={
          <InputDefault
            label=""
            placeholder="Pesquise o grupo"
            onChange={debounced}
          />
        }
      />

      <PaginationData
        data={allGrupos}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default AssembleiaPage;
