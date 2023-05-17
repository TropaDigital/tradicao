'use client';

// Next
import { useSearchParams } from 'next/navigation';

// React
import React, { useState, useEffect } from 'react';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import MainTitle from '@/components/UI/MainTitle';
import PostCard from '@/components/pages/Blog/PostCard';
import AsideBar from '@/components/pages/Blog/AsideBar';
import PaginationData from '@/components/shared/PaginationData';

// Images
import BlogBG from '../../../../public/images/blog_bg.jpg';

// Styles
import * as S from './styles';

// Libraries
import 'moment/locale/pt-br';
import moment from 'moment';

// Services
import { useGetPostList } from '@/services/blog/posts/GET/useGetPostList';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';

const BlogPage = () => {
  const [query, setQuery] = useState<string>('');
  const [actualPage, setActualPage] = useState(1);

  const params = useSearchParams();

  const { allCategorias } = useGetAllCategorias();
  const { postsList } = useGetPostList(
    '?' + query + `currentPage=${actualPage}&perPage=10`
  );

  useEffect(() => {
    if (params.get('categoria') !== null) {
      getCurrentCategory();
    }

    if (params.get('autor') !== null) {
      setQuery(`pesquisa=${params.get('autor')}&`);
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

            {params.get('autor') && (
              <S.SearchPostsByAuthor>
                Todas as postagens de
                <span className="authorWrapper"> {params.get('autor')}</span>
              </S.SearchPostsByAuthor>
            )}
            <S.ListPostsContainer>
              {postsList?.result?.map((post) => (
                <PostCard
                  title={post?.titulo}
                  date={moment(post?.data?.split('T')[0]).format('DD MMM')}
                  image={post?.postagem_img}
                  subtitle={post?.subtitulo}
                  postId={post?.id_postagem}
                  key={post?.id_postagem}
                />
              ))}
              {postsList?.result?.length === 0 && (
                <h3>Nenhuma postagem foi encontrada!</h3>
              )}
            </S.ListPostsContainer>
            <PaginationData
              data={postsList}
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
