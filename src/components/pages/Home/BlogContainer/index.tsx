// React
import React from 'react';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import BlogCard from '../BlogCard';

// Styles
import * as S from './styles';

// Services
import { useGetPostList } from '@/services/blog/posts/GET/useGetPostList';

const BlogContainer = () => {
  const { postsList } = useGetPostList('?currentPage=1&perPage=4');

  return (
    <CenterWrapper>
      <S.Title data-aos="fade-up">
        Blog <strong>Tradição</strong>
      </S.Title>

      <S.Container data-aos="fade-up">
        {postsList?.result?.map((post) => (
          <BlogCard
            image={post?.postagem_img}
            postId={post?.id_postagem}
            title={post?.titulo}
            subtitle={post?.subtitulo}
            key={post?.id_postagem}
            slug={post?.slug}
          />
        ))}
      </S.Container>
    </CenterWrapper>
  );
};

export default BlogContainer;
