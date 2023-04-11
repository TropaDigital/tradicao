import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';
import { IPostCard } from './types';

const PostCard = ({ date, image, subtitle, title }: IPostCard) => {
  return (
    <Link
      href={title
        ?.toLowerCase()
        ?.normalize('NFD')
        ?.trim()
        ?.replaceAll(' ', '-')}
    >
      <S.Container>
        <div className="post-date">{date}</div>

        <div className="post-thumb">
          <Image src={image} alt="Placeholder" width={435} height={250} />
        </div>
        <div className="post-description-container">
          <h3 className="post-title">{title}</h3>
          <p className="post-description">{subtitle}</p>
        </div>
      </S.Container>
    </Link>
  );
};

export default PostCard;
