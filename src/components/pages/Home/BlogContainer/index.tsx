import CenterWrapper from '@/components/global/CenterWrapper';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import React from 'react';
import BlogCard from '../BlogCard';
import * as S from './styles';

const BlogContainer = () => {
  const { allPosts } = useGetAllPosts('');
  const lastFourPosts = allPosts?.result?.slice(0, 4);

  return (
    <CenterWrapper>
      <S.Title>
        Blog <strong>Tradição</strong>
      </S.Title>

      <S.Container>
        {lastFourPosts?.map((post) => (
          <BlogCard
            image={post?.postagem_img}
            postId={post?.id_postagem}
            title={post?.titulo}
            subtitle={post?.subtitulo}
          />
        ))}
      </S.Container>
    </CenterWrapper>
  );
};

export default BlogContainer;
