'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { HeaderDashboard } from '../styles';

const BlogPanel = () => {
  const headerTable = [
    {
      key: 'criado',
      label: 'Data Postagem',
      type: 'date'
    },
    {
      key: 'postagem_img',
      label: 'Imagem',
      type: 'string'
    },
    {
      key: 'titulo',
      label: 'Título',
      type: 'string'
    },
    {
      key: 'subtitulo',
      label: 'Sub-Título',
      type: 'string'
    },
    {
      key: 'conteudo',
      label: 'Título',
      type: 'string'
    },
    {
      key: 'local',
      label: 'Local',
      type: 'string'
    },
    {
      key: 'categoria',
      label: 'Categoria',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const { allPosts } = useGetAllPosts();

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Blog" />

        <div className="buttonWrapper">
          <Button
            color="secondary"
            degrade
            radius="rounded"
            className="styledButton"
          >
            + Adicionar Postagem
          </Button>
        </div>
      </HeaderDashboard>

      <Table
        data={allPosts?.result}
        header={headerTable}
        title={'Todos os Posts'}
        search={<InputDefault label="" />}
      />
    </>
  );
};

export default BlogPanel;
