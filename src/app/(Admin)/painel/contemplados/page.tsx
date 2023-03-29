'use client';

import { SearchIcon } from '@/assets/icons';
import FormProduct from '@/components/pages/Painel/components/forms/FormProduct';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import React, { useState } from 'react';

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

  return (
    <>
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormProduct
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
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por contemplados"
          />
        }
      />
    </>
  );
};

export default ContempladosPage;
