'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HeaderDashboard } from '../styles';

const BlogPanel = () => {
  const headerTable = [
    {
      key: 'criado',
      label: 'Postado',
      type: 'date'
    },
    {
      key: 'postagem_img',
      label: 'Imagem',
      type: 'image'
    },
    {
      key: 'titulo',
      label: 'Título',
      type: 'longText'
    },
    {
      key: 'subtitulo',
      label: 'Sub-Título',
      type: 'longText'
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

  const { allPosts } = useGetAllPosts('');

  const router = useRouter();

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
            onClick={() => {
              localStorage?.removeItem('actualPost');
              router?.push('/painel/blog/postagem');
            }}
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
