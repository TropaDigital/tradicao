'use client';

// Next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// React
import React, { useEffect, useRef, useState } from 'react';

// Components
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import InputImage from '@/components/pages/Painel/components/inputs/InputImage';
import Button from '@/components/UI/Button';

// Services
import { IGetPosts, IUpdatePostBody } from '@/services/blog/posts/types';
import { useCreatePost } from '@/services/blog/posts/POST/useCreatePost';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { useUpdatePost } from '@/services/blog/posts/PUT/useUpdatePost';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';

// Libraries
import { useEditor } from '@tiptap/react';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import ImageTipTap from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TipTapLink from '@tiptap/extension-link';

import { Formik, Form, useFormik } from 'formik';

// Styles
import * as S from './styles';

// Icons
import { RemoveImageIcon } from '@/assets/icons';

// Yup
import { PostagemSchema } from './yupSchema';

const PostPanel = () => {
  const router = useRouter();

  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [currentPost, setCurrentPost] = useState<IUpdatePostBody>();
  const [currentImage, setCurrentImage] = useState<string>('');

  const { postFile } = usePostFile();
  const { allCategorias } = useGetAllCategorias();
  const { updatePost } = useUpdatePost();
  const { createPost } = useCreatePost();
  const { allPosts } = useGetAllPosts(`?slug=${currentSlug}`);

  const formik = useFormik({
    initialValues: {
      postagem_img: '',
      titulo: currentPost?.titulo ?? '',
      subtitulo: currentPost?.subtitulo ?? '',
      autor: currentPost?.autor ?? '',
      local: currentPost?.local ?? '',
      categoria_id: currentPost?.categoria_id ?? '',
      conteudo: '',
      slug: ''
    },
    validationSchema: PostagemSchema,
    onSubmit: async (values) => {
      try {
        values.postagem_img = currentImage;

        if (currentPost) {
          updatePost({
            postagem: values,
            id: currentPost?.id_postagem
          });
        }

        if (!currentPost) {
          createPost(values);
        }

        if (typeof window !== 'undefined') {
          localStorage?.removeItem('postSlug');
        }

        setCurrentPost({} as any);
        router?.push('/painel/blog');
      } catch (err) {
        console.log(err);
      }
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPostSlug = localStorage?.getItem('postSlug') as string;
      if (currentPostSlug) setCurrentSlug(currentPostSlug);
    }
  }, []);

  useEffect(() => {
    if (!currentSlug) return;
    setCurrentPost(allPosts?.result[0]);
  }, [allPosts]);

  useEffect(() => {
    if (!currentPost) return;

    editor?.commands?.insertContent(currentPost?.conteudo);
    setCurrentImage(currentPost?.postagem_img);

    handleFormData();
  }, [currentPost]);

  function handleFormData() {
    if (!formik || !currentPost) return;

    const valuesKeys = Object.keys(formik?.initialValues);

    valuesKeys?.forEach((key) => {
      const keyPost = key as keyof IUpdatePostBody;
      formik?.setFieldValue(key, currentPost[keyPost]);
    });
  }

  const editor = useEditor({
    extensions: [
      TextStyle,
      Underline.configure({
        HTMLAttributes: {
          class: 'underline'
        }
      }),
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
        allowBase64: false
      }),
      TipTapLink.configure({
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

          postFile(formData)?.then((imageUrl: string) => {
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
        <form onSubmit={formik?.handleSubmit}>
          <S.InitialPostWrapper>
            {currentImage && (
              <div className="post-thumb-container">
                <div className="post-thumb-wrapper">
                  <div
                    className="post-thumb-overlay"
                    onClick={() => setCurrentImage('')}
                  >
                    <RemoveImageIcon size={64} />
                  </div>
                  <Image
                    src={currentImage}
                    alt={`Capa da postagem ${formik?.values?.titulo}`}
                    width={500}
                    height={281}
                  />
                </div>
              </div>
            )}
            {!currentImage && (
              <InputImage
                onPostImage={(imageUrl) => {
                  setCurrentImage(imageUrl);
                }}
                title="Adicionar Capa"
                subtitle="Tamanho recomendado 1024x768"
                error={
                  formik?.touched?.postagem_img &&
                  currentImage?.length === 0 &&
                  'A imagem é obrigatória.'
                }
                name="postagem_img"
              />
            )}
            <S.InputsWrapper>
              <InputDefault
                label="Título"
                placeholder="Título da Postagem"
                onChange={formik?.handleChange}
                name="titulo"
                value={formik?.values?.titulo}
                error={formik?.touched?.titulo && formik?.errors?.titulo}
              />

              <TextAreaDefault
                label="Subtítulo"
                placeholder="Subtítulo da Postagem"
                onChange={formik?.handleChange}
                name="subtitulo"
                value={formik?.values?.subtitulo}
                error={formik?.touched?.subtitulo && formik?.errors?.subtitulo}
              />

              <S.LineInputsWrapper>
                <InputDefault
                  label="Autor"
                  placeholder="Autor da Postagem"
                  onChange={formik?.handleChange}
                  name="autor"
                  value={formik?.values?.autor}
                  error={formik?.touched?.autor && formik?.errors?.autor}
                />
                <InputDefault
                  label="Local"
                  placeholder="Local da Postagem"
                  onChange={formik?.handleChange}
                  name="local"
                  value={formik?.values?.local}
                  error={formik?.touched?.local && formik?.errors?.local}
                />
                <SelectDefault
                  label="Categoria"
                  placeholder="Categoria da Postagem"
                  onChange={formik?.handleChange}
                  name="categoria_id"
                  value={formik?.values?.categoria_id}
                  error={
                    formik?.touched?.categoria_id && formik?.errors.categoria_id
                  }
                >
                  <option>Selecione uma categoria</option>
                  {allCategorias?.map((categoria, key) => (
                    <option value={categoria?.categoria_id} key={key}>
                      {categoria?.categoria}
                    </option>
                  ))}
                </SelectDefault>
              </S.LineInputsWrapper>
            </S.InputsWrapper>
          </S.InitialPostWrapper>
          <TextEditor editor={editor} />

          <S.ButtonsWrapper>
            <div className="buttonContainer">
              <Button
                color="primary"
                radius="rounded"
                variant="outline"
                type="button"
                onClick={() => setCurrentPost({} as any)}
              >
                <Link href="/painel/blog">Cancelar</Link>
              </Button>
              <Button
                color="secondary"
                radius="rounded"
                degrade
                type="submit"
                onClick={() =>
                  formik?.setFieldValue('conteudo', editor?.getHTML())
                }
              >
                {currentPost ? 'Editar' : 'Publicar'} Postagem
              </Button>
            </div>
          </S.ButtonsWrapper>
        </form>
      </S.Container>
    </>
  );
};

export default PostPanel;
