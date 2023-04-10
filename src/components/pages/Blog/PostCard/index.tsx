import Image from 'next/image';
import React from 'react';
import * as S from './styles';

const PostCard = () => {
  return (
    <S.Container>
      <div className="post-date">
        <span className="post-day">23 </span> Fev
      </div>

      <div className="post-thumb">
        <Image
          src={'https://via.placeholder.com/435x250'}
          alt="Placeholder"
          width={435}
          height={250}
        />
      </div>
      <div className="post-description-container">
        <h3 className="post-title">Headline</h3>
        <p className="post-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          doloremque quam sapiente corporis beatae.
        </p>
      </div>
    </S.Container>
  );
};

export default PostCard;
