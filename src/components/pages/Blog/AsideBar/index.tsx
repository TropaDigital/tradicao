'use client';

import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import * as S from './styles';

export default function AsideBar() {
  const { allCategorias } = useGetAllCategorias();
  const rankingPosts = useGetAllPosts('?ordem=acesso_mes');

  return (
    <>
      <S.AsideContainer>
        <InputDefault label="" placeholder="Pesquisar post" />

        <S.ListAsideTopics>
          <h4 className="topic-title">Mais Acessados</h4>

          <div className="list-container">
            {rankingPosts?.allPosts?.result?.map((rankPost, key) => (
              <p className="topic-item" key={key}>
                {rankPost?.titulo}
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
    </>
  );
}
