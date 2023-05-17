'use client';

import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { useDebouncedCallback } from 'use-debounce';
import Link from 'next/link';
import { useScrollDirection } from '@/utils/detectScrollDirection';
import { useGetPostInfo } from '@/services/blog/posts/GET/useGetPostInfo';

export default function AsideBar() {
  const [query, setQuery] = useState<string>('');
  const [showSuggests, setShowSuggests] = useState<'show' | ''>('');

  const { allCategorias } = useGetAllCategorias();
  const rankingPosts = useGetPostInfo('?ordem_tipo=acesso_mes');
  const { postsInfo } = useGetPostInfo(query);
  const scrollDirection = useScrollDirection();

  const debounced = useDebouncedCallback(
    // function
    (e) => {
      setQuery(`?pesquisa=${e?.target?.value}`);
    },
    // delay in ms
    300
  );

  function handleSlug(title: string): string {
    const slug = title?.trim()?.replaceAll(' ', '-').toLowerCase();
    return slug;
  }

  return (
    <>
      <S.AsideContainer className={scrollDirection}>
        <S.SuggestsSearchsContainer>
          <InputDefault
            label=""
            placeholder="Pesquisar postagem"
            onChange={debounced}
            className="input-search"
            onFocus={() => setShowSuggests('show')}
            onBlur={() => setTimeout(() => setShowSuggests(''), 200)}
          />

          <div className={'suggest-container' + showSuggests}>
            <ul>
              {postsInfo?.data?.length > 0 ? (
                <>
                  {postsInfo?.data?.map((postSuggest) => (
                    <li key={postSuggest?.id_postagem}>
                      <Link
                        href={'/blog/' + handleSlug(postSuggest?.titulo)}
                        className="suggest-option"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            localStorage?.setItem(
                              'postId',
                              String(postSuggest?.id_postagem)
                            );
                          }
                        }}
                      >
                        {postSuggest?.titulo}
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <li>Nada encontrado</li>
              )}
            </ul>
          </div>
        </S.SuggestsSearchsContainer>

        <S.ListAsideTopics>
          <h4 className="topic-title">Mais Acessados</h4>

          <div className="list-container">
            {rankingPosts?.postsInfo?.data?.map((rankPost, key) => {
              if (key > 4) return;
              return (
                <Link
                  href={
                    '/blog/' +
                    rankPost?.titulo?.toLowerCase().trim().replaceAll(' ', '-')
                  }
                  className="topic-item"
                  key={rankPost?.id_postagem}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.setItem(
                        'postId',
                        String(rankPost?.id_postagem)
                      );
                    }
                  }}
                >
                  {rankPost?.titulo}
                </Link>
              );
            })}
          </div>
        </S.ListAsideTopics>

        <S.ListAsideTopics>
          <h4 className="topic-title">Categorias</h4>

          <div className="list-container">
            {allCategorias?.map((category, key) => (
              <Link
                href={`/blog?categoria=${category?.categoria}`}
                className="topic-item"
                key={key}
              >
                {category?.categoria}
              </Link>
            ))}
          </div>
        </S.ListAsideTopics>
      </S.AsideContainer>
    </>
  );
}
