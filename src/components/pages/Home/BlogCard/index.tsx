import Link from 'next/link';
import React from 'react';
import { IBlogCard } from './types';
import * as S from './styles';
import Image from 'next/image';
import { toSlug } from '@/utils/masks';

const BlogCard = ({ image, subtitle, title, postId }: IBlogCard) => {
  function setPostIdToLocalStorage() {
    if (typeof window !== 'undefined') {
      localStorage?.setItem('postId', postId?.toString());
    }
  }

  return (
    <Link href={`/blog/${toSlug(title)}`} onClick={setPostIdToLocalStorage}>
      <S.Container>
        <div className="post-thumb">
          <Image src={image} alt="Placeholder" width={435} height={250} />
        </div>
        <div className="post-description-container">
          <h3 className="post-title">{title}</h3>
          <p className="post-description">{subtitle}</p>
          <Link
            href={title?.toLowerCase().trim().replaceAll(' ', '-')}
            className="read-more"
          >
            Ler mais
          </Link>
        </div>
      </S.Container>
    </Link>
  );
};

export default BlogCard;
