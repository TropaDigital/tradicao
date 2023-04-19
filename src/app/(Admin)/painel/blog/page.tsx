'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { HeaderDashboard } from '../styles';
import { useDebouncedCallback } from 'use-debounce';

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

  const [actualPage, setActualPage] = useState(1);
  const [query, setQuery] = useState<string>('');

  const { allPosts } = useGetAllPosts(
    `?${query}currentPage=${actualPage}&perPage=10`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const router = useRouter();

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
      <HeaderDashboard>
        <HeaderPage title="Blog" />

        <div className="buttonWrapper">
          <Button
            color="secondary"
            degrade
            radius="rounded"
            className="styledButton"
            onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage?.removeItem('actualPost');
                router?.push('/painel/blog/postagem');
              }
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
        search={
          <InputDefault
            label=""
            placeholder="Pesquise a postagem"
            onChange={debounced}
          />
        }
      />
      <PaginationData
        data={allPosts}
        handlePagination={handlePageChange}
        page={actualPage}
      />
    </>
  );
};

export default BlogPanel;
