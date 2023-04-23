'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import React, { useState, useEffect } from 'react';
import SkewContainer from '@/components/shared/SkewContainer';
import BlogBG from '../../../../public/images/blog_bg.png';
import MainTitle from '@/components/UI/MainTitle';
import * as S from './styles';
import PostCard from '@/components/pages/Blog/PostCard';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import moment from 'moment';
import 'moment/locale/pt-br';
import AsideBar from '@/components/pages/Blog/AsideBar';
import { useSearchParams } from 'next/navigation';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import PaginationData from '@/components/shared/PaginationData';

const BlogPage = () => {
  const [query, setQuery] = useState<string>('');
  const [actualPage, setActualPage] = useState(1);

  const params = useSearchParams();

  const { allCategorias } = useGetAllCategorias();
  const { allPosts } = useGetAllPosts(
    '?' + query + `currentPage=${actualPage}&perPage=10`
  );

  useEffect(() => {
    if (params.get('categoria') !== null) {
      getCurrentCategory();
    }
  }, [params.get('categoria')]);

  function getCurrentCategory() {
    const currentCategory = allCategorias?.filter((category) => {
      return category?.categoria === params.get('categoria');
    });

    if (currentCategory) {
      setQuery(`categoria_id=${currentCategory[0]?.categoria_id}&`);
      return;
    }

    setQuery('');
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  return (
    <>
      <SkewContainer
        imageAlt="Mulher digitando em um notebook"
        imageSrc={BlogBG}
      />
      <CenterWrapper>
        <S.Container>
          <div>
            <div>
              <MainTitle title="Blog Tradição" />
              <p className="blog-subtitle">Novidades e notícias</p>
            </div>

            <S.ListPostsContainer>
              {allPosts?.result?.map((post) => (
                <PostCard
                  title={post?.titulo}
                  date={moment(post?.criado).format('DD MMM')}
                  image={post?.postagem_img}
                  subtitle={post?.subtitulo}
                  postId={post?.id_postagem}
                  key={post?.id_postagem}
                />
              ))}
              {allPosts?.result?.length === 0 && (
                <h3>Nenhuma postagem foi encontrada!</h3>
              )}
            </S.ListPostsContainer>
            <PaginationData
              data={allPosts}
              handlePagination={handlePageChange}
              page={actualPage}
            />
          </div>

          <AsideBar />
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default BlogPage;
