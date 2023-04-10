'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import React from 'react';
import SkewContainer from '@/components/shared/SkewContainer';
import BlogBG from '../../../../public/images/blog_bg.png';
import MainTitle from '@/components/UI/MainTitle';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import * as S from './styles';
import PostCard from '@/components/pages/Blog/PostCard';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import moment from 'moment';
import 'moment/locale/pt-br';

const BlogPage = () => {
  const arrayFake = new Array(5).fill('lorem ipsum dolor amet.');

  const { allCategorias } = useGetAllCategorias();
  const { allPosts } = useGetAllPosts('');

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
                />
              ))}
            </S.ListPostsContainer>
          </div>

          <S.AsideContainer>
            <InputDefault label="" placeholder="Pesquisar post" />

            <S.ListAsideTopics>
              <h4 className="topic-title">Mais Acessados</h4>

              <div className="list-container">
                {arrayFake?.map((list, key) => (
                  <p className="topic-item" key={key}>
                    {list}
                  </p>
                ))}
              </div>
            </S.ListAsideTopics>

            <S.ListAsideTopics>
              <h4 className="topic-title">Categorias</h4>

              <div className="list-container">
                {allCategorias?.map((category, key) => (
                  <p className="topic-item" key={key}>
                    {category?.categoria}
                  </p>
                ))}
              </div>
            </S.ListAsideTopics>
          </S.AsideContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default BlogPage;
