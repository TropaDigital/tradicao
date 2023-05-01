'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import AsideBar from '@/components/pages/Blog/AsideBar';
import API from '@/services/api';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import * as S from './styles';

const BlogPostPage = () => {
  const pathName = usePathname();
  const { allPosts } = useGetAllPosts(`?slug=${pathName?.split('/')?.pop()}`);

  const markupPost = { __html: allPosts?.result[0]?.conteudo };

  moment.locale('pt-br');

  useEffect(() => {
    if (allPosts) {
      API.post(`/blog/post-vizualizacao`, {
        id_postagem: allPosts?.result[0]?.id_postagem
      });
    }
  }, [allPosts]);

  return (
    <>
      <CenterWrapper>
        <S.Container>
          <section>
            <S.BlogHeader>
              <span className="post-category">
                <Link
                  href={{
                    pathname: `/blog`,
                    query: `categoria=${allPosts?.result[0]?.categoria}`
                  }}
                >
                  {allPosts?.result[0]?.categoria}
                </Link>
              </span>
              <h1 className="post-title">{allPosts?.result[0]?.titulo}</h1>
              <span className="post-date">
                Postado em{' '}
                {moment(allPosts?.result[0]?.data?.split('T')[0]).format(
                  'DD [de] MMMM'
                )}{' '}
                por{' '}
                <Link
                  href={{
                    pathname: `/blog`,
                    query: `autor=${allPosts?.result[0]?.autor}`
                  }}
                  style={{ color: 'var(--dark)' }}
                >
                  {allPosts?.result[0]?.autor ?? 'Consorlina'}
                </Link>
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
