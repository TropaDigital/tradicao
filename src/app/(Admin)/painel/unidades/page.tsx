'use client';

import { SearchIcon } from '@/assets/icons';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetUnitsByQuery } from '@/services/unidades/GET/useGetUnits';
import * as S from '../styles';

import React, { useEffect, useState } from 'react';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import FormUnidades from '@/components/pages/Painel/components/forms/FormUnidades';
import DefaultInput from '@/components/UI/DefaultInput';
import { useDebouncedCallback } from 'use-debounce';

const UnidadesPainelPage = () => {
  const headerTable = [
    {
      key: 'titulo',
      label: 'Nome Unidade',
      type: 'string'
    },
    {
      key: 'endereco',
      label: 'Endereço',
      type: 'string'
    },
    {
      key: 'bairro',
      label: 'Bairro',
      type: 'string'
    },
    {
      key: 'cidade',
      label: 'Cidade',
      type: 'string'
    },
    {
      key: 'uf',
      label: 'UF',
      type: 'string'
    },
    {
      key: 'cep',
      label: 'CEP',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [actualPage, setActualPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>();
  const [searchUnit, setSearchUnit] = useState<string>('');

  const { units } = useGetUnitsByQuery(
    searchUnit + `perPage=16&currentPage=${actualPage}`
  );

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value?.target?.value) {
        setSearchUnit(`pesquisa=${value?.target?.value}&`);
        return;
      }
      setSearchUnit('');
    },
    // delay in ms
    300
  );

  const handleSearch = (e: React.ChangeEvent<unknown>, value: number) => {
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
          <FormUnidades
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}
      <S.HeaderDashboard>
        <HeaderPage title="Unidades" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar Unidade
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        header={headerTable}
        data={units?.result}
        title="Todas as unidades"
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise pelo nome da unidade"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={units}
        page={actualPage}
        handlePagination={handleSearch}
      />
    </>
  );
};

export default UnidadesPainelPage;
