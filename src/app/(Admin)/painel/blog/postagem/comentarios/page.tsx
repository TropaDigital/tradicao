'use client';

// React
import React from 'react';

// Styles
import { HeaderDashboard } from '../../../styles';

// Components
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';

const CommentsPage = () => {
  const headerTable = [
    {
      key: 'criado',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'string'
    },
    {
      key: 'comentario',
      label: 'Comentário',
      type: 'longText'
    },
    {
      key: 'site',
      label: 'Site',
      type: 'longText'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const postName = 'Imposto de renda: O que é?';

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Comentários" />
      </HeaderDashboard>

      <Table
        data={[]}
        header={headerTable}
        title={`Todos os comentários da postagem "${postName}"`}
      />
    </>
  );
};

export default CommentsPage;
