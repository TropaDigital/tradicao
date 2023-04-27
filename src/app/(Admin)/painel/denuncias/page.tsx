'use client';

import { SearchIcon } from '@/assets/icons';
import FormRepresentante from '@/components/pages/Painel/components/forms/FormRepresentante';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { useGetAllComplaints } from '@/services/denuncia/GET/useGetAllComplaints';
import React, { useState } from 'react';
import * as S from '../styles';

const DemonstracoesPage = () => {
  const headerTable = [
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'email',
      label: 'E-mail',
      type: 'string'
    },
    {
      key: 'celular',
      label: 'Celular',
      type: 'string'
    },
    {
      key: 'texto_denuncia',
      label: 'Denúncia',
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

  const [modalOpen, setModalOpen] = useState<
    'publicar' | 'editar' | undefined | null
  >();

  const { allComplaints } = useGetAllComplaints();

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
        <HeaderPage title="Denúncias" />
        <div className="buttonWrapper">
          <Button
            className="styledButton"
            onClick={() => setModalOpen('publicar')}
            radius="rounded"
            color="secondary"
            degrade
          >
            + Adicionar Denúncia
          </Button>
        </div>
      </S.HeaderDashboard>
      <Table
        header={headerTable}
        title={'Lista de Denúncias'}
        data={allComplaints}
        search={
          <DefaultInput
            icon={<SearchIcon />}
            placeholder="Pesquise por Denúncia"
          />
        }
      />
    </>
  );
};

export default DemonstracoesPage;
