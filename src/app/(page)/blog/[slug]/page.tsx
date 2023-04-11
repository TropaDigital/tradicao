'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import AsideBar from '@/components/pages/Blog/AsideBar';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import Image from 'next/image';
import React, { useEffect } from 'react';
import * as S from './styles';

const BlogPostPage = () => {
  const actualPostToView = Number(localStorage?.getItem('postId'));

  const { allPosts } = useGetAllPosts(`/${actualPostToView}`);

  useEffect(() => {
    if (allPosts) {
      console.log(allPosts);
    }
  }, [allPosts]);

  const markupPost = { __html: allPosts?.result[0]?.conteudo };

  return (
    <>
      <CenterWrapper>
        <S.Container>
          <section>
            <S.PostThumbnail>
              <Image
                src={allPosts?.result[0]?.postagem_img}
                alt={allPosts?.result[0]?.titulo}
                width={900}
                height={500}
              />
            </S.PostThumbnail>

            <S.BlogContent dangerouslySetInnerHTML={markupPost} />
          </section>

          <AsideBar />
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default BlogPostPage;
