'use client';

import { ArrowLeftIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import AsideBar from '@/components/pages/Blog/AsideBar';
import Button from '@/components/UI/Button';
import API from '@/services/api';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

const BlogPostPage = () => {
  const [viewedPost, setViwedPost] = useState<any>();

  if (typeof window !== 'undefined') {
    setViwedPost(localStorage?.getItem('postId'));
  }

  const { allPosts } = useGetAllPosts(`/${viewedPost}`);

  const markupPost = { __html: allPosts?.result[0]?.conteudo };

  useEffect(() => {
    API.post(`/blog/post-vizualizacao`, { id_postagem: viewedPost });
  }, []);

  return (
    <>
      <CenterWrapper>
        <S.Container>
          <section>
            <S.BlogHeader>
              <span className="post-category">
                <Link
                  href={`/blog?categoria=${allPosts?.result[0]?.categoria}`}
                >
                  {allPosts?.result[0]?.categoria}
                </Link>
              </span>
              <h1 className="post-title">{allPosts?.result[0]?.titulo}</h1>
              <span className="post-date">
                {/* Postado dia 6 de Abril de 2023 por Consorlina */}
                {`Postado em ${moment(allPosts?.result[0]?.criado).format(
                  'DD MMMM'
                )} por ${allPosts?.result[0]?.autor ?? 'Consorlina'}`}
              </span>
            </S.BlogHeader>
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
