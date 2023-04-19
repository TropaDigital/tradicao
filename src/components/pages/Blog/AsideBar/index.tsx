'use client';

import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { useDebouncedCallback } from 'use-debounce';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScrollDirection } from '@/utils/detectScrollDirection';

export default function AsideBar() {
  const [query, setQuery] = useState<string>('');
  const [showSuggests, setShowSuggests] = useState<'show' | ''>('');

  const { allCategorias } = useGetAllCategorias();
  const rankingPosts = useGetAllPosts('?ordem_tipo=acesso_mes');
  const { allPosts } = useGetAllPosts(query);
  const scrollDirection = useScrollDirection();

  const debounced = useDebouncedCallback(
    // function
    (e) => {
      setQuery(`?pesquisa=${e?.target?.value}`);
    },
    // delay in ms
    300
  );

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
              {allPosts?.result?.length > 0 ? (
                <>
                  {allPosts?.result?.map((postSuggest) => (
                    <li>
                      <Link
                        href={
                          '/blog/' +
                          postSuggest?.titulo
                            ?.trim()
                            ?.replaceAll(' ', '-')
                            .toLowerCase()
                        }
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
            {rankingPosts?.allPosts?.result?.map((rankPost, key) => {
              if (key > 4) return;
              return (
                <Link
                  href={
                    '/blog/' +
                    rankPost?.titulo?.toLowerCase().trim().replaceAll(' ', '-')
                  }
                  className="topic-item"
                  key={key}
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
