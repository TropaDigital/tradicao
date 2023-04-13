'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { IGetPosts } from '@/services/blog/posts/types';
import { useEditor } from '@tiptap/react';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import ImageTipTap from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import InputImage from '@/components/pages/Painel/components/inputs/InputImage';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { Formik, Form } from 'formik';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { PostagemSchema } from './yupSchema';

const PostPanel = () => {
  const { postFile } = usePostFile();
  const { allCategorias } = useGetAllCategorias();

  const [currentPost, setCurrentPost] = useState<IGetPosts | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagePost: IGetPosts = JSON.parse(
        localStorage?.getItem('actualPost') as any
      );

      editor?.commands?.insertContent(storagePost?.conteudo);
      setCurrentPost(storagePost);
    }
  }, []);

  const editor = useEditor({
    extensions: [
      TextStyle,
      Placeholder.configure({
        placeholder: 'Escreva uma postagem...'
      }),
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'ordered-list'
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: 'bullet-list'
          }
        },
        heading: {
          levels: [2, 3],
          HTMLAttributes: {
            class: 'title'
          }
        },
        italic: {
          HTMLAttributes: {
            class: 'italic'
          }
        },
        bold: {
          HTMLAttributes: {
            class: 'strnog'
          }
        },
        hardBreak: {
          keepMarks: true
        }
      }),
      Color.configure({
        types: ['textStyle']
      }),
      TextAlign.configure({
        types: ['paragraph', 'heading']
      }),
      ImageTipTap.configure({
        allowBase64: true
      }),
      Link.configure({
        protocols: ['mailto', 'tel'],
        validate: (href) => /^https?:\/\//.test(href),
        HTMLAttributes: {
          class: 'link'
        }
      })
    ],
    content: currentPost?.conteudo ?? '',
    editorProps: {
      handleDrop(view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          let formData = new FormData();
          formData?.set('file', event?.dataTransfer?.files[0]);

          postFile(formData).then((imageUrl) => {
            const { schema } = view?.state;
            const coordinates = view?.posAtCoords({
              left: event?.clientX,
              top: event?.clientY
            });
            const node = schema?.nodes?.image?.create({ src: imageUrl });
            if (coordinates) {
              const transaction = view?.state?.tr?.insert(
                coordinates.pos,
                node
              );
              return view?.dispatch(transaction);
            }
          });

          return true;
        }

        return false;
      }
    },
    autofocus: false,
    injectCSS: false
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <HeaderPage title={currentPost ? 'Editar Postagem' : 'Criar Postagem'} />

      <S.Container>
        <Formik
          initialValues={{
            postagem_img: currentPost?.postagem_img ?? '',
            titulo: currentPost?.subtitulo ?? '',
            subtitulo: currentPost?.subtitulo ?? '',
            autor: currentPost?.autor ?? '',
            local: currentPost?.local ?? '',
            categoria_id: currentPost?.categoria_id ?? ''
          }}
          validationSchema={PostagemSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
            touched
          }) => (
            <Form onSubmit={handleSubmit}>
              <S.InitialPostWrapper>
                <InputImage
                  onPostImage={(imageUrl) => {
                    setFieldValue('postagem_img', imageUrl);
                  }}
                  title="Adicionar Capa"
                />
                <S.InputsWrapper>
                  <InputDefault
                    label="Título"
                    placeholder="Título da Postagem"
                    onChange={handleChange}
                    name="titulo"
                    value={values?.titulo}
                  />
                  <InputDefault
                    label="Subtítulo"
                    placeholder="Subtítulo da Postagem"
                    onChange={handleChange}
                    name="subtitulo"
                    value={values?.subtitulo}
                  />

                  <S.LineInputsWrapper>
                    <InputDefault
                      label="Autor"
                      placeholder="Autor da Postagem"
                      onChange={handleChange}
                      name="autor"
                      value={values?.autor}
                    />
                    <InputDefault
                      label="Local"
                      placeholder="Local da Postagem"
                      onChange={handleChange}
                      name="local"
                      value={values?.local}
                    />
                    <SelectDefault
                      label="Categoria"
                      placeholder="Categoria da Postagem"
                      onChange={handleChange}
                      name="categoria_id"
                      value={values?.categoria_id}
                    >
                      <option>Selecione uma categoria</option>
                      {allCategorias?.map((categoria) => (
                        <option value={categoria?.categoria_id}>
                          {categoria?.categoria}
                        </option>
                      ))}
                    </SelectDefault>
                  </S.LineInputsWrapper>
                </S.InputsWrapper>
              </S.InitialPostWrapper>
              <TextEditor editor={editor} />
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '15px',
                  maxWidth: '800px'
                }}
              >
                <Button color="primary" radius="rounded" variant="outline">
                  Cancelar
                </Button>
                <Button color="secondary" radius="rounded" degrade>
                  Criar Postagem
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </S.Container>
    </>
  );
};

export default PostPanel;
