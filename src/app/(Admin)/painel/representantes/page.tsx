'use client';

import { SearchIcon } from '@/assets/icons';
import FormDemonstracoes from '@/components/pages/Painel/components/forms/FormDemonstracoes';
import FormRepresentante from '@/components/pages/Painel/components/forms/FormRepresentante';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllRepresentantes } from '@/services/representante/GET/useGetAllRepresentantes';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import * as S from '../styles';

const DemonstracoesPage = () => {
  const headerTable = [
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'cnpj',
      label: 'CNPJ',
      type: 'string'
    },
    {
      key: 'contato',
      label: 'Contato',
      type: 'string'
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
  const [searchRepresentante, setSearchRepresentante] = useState('');
  const [actualPage, setActualPage] = useState(1);

  const { allRepresentantes } = useGetAllRepresentantes(
    searchRepresentante + `limit=5&page=${actualPage}`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchRepresentante(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchRepresentante('');
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
          <FormRepresentante
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}
      <S.HeaderDashboard>
        <HeaderPage title="Reprensentantes" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar Representante
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        header={headerTable}
        title={'Lista de Representantes'}
        data={allRepresentantes?.dataPaginada}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por representantes"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={allRepresentantes}
        page={actualPage}
        handlePagination={handlePageChange}
      />
    </>
  );
};

export default DemonstracoesPage;
