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
import Underline from '@tiptap/extension-underline';
import TipTapLink from '@tiptap/extension-link';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import InputImage from '@/components/pages/Painel/components/inputs/InputImage';
import { useGetAllCategorias } from '@/services/blog/categorias/GET/useGetAllCategorias';
import { Formik, Form } from 'formik';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { useUpdatePost } from '@/services/blog/posts/PUT/useUpdatePost';
import Link from 'next/link';
import { useCreatePost } from '@/services/blog/posts/POST/useCreatePost';
import { useRouter } from 'next/navigation';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { RemoveImageIcon } from '@/assets/icons';
import { PostagemSchema } from './yupSchema';
import { toSlug } from '@/utils/masks';
import { useGetAllPosts } from '@/services/blog/posts/GET/useGetAllPosts';
import { toast } from 'react-toastify';

const PostPanel = () => {
  const [slug, setSlug] = useState<string>('');

  const { postFile } = usePostFile();
  const { allCategorias } = useGetAllCategorias();
  const { updatePost } = useUpdatePost();
  const { createPost } = useCreatePost();
  const { allPosts } = useGetAllPosts(`?slug=${slug}`);
  const router = useRouter();

  const [currentPost, setCurrentPost] = useState<IGetPosts | undefined>();
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagePost: IGetPosts = JSON.parse(
        localStorage?.getItem('actualPost') as any
      );

      setCurrentPost(storagePost);
    }
  }, []);

  useEffect(() => {
    if (currentPost) {
      editor?.commands?.insertContent(currentPost?.conteudo);
      setCurrentImage(currentPost?.postagem_img);
    }
  }, [currentPost]);

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
        allowBase64: true
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
            postagem_img: '',
            titulo: currentPost?.titulo ?? '',
            subtitulo: currentPost?.subtitulo ?? '',
            autor: currentPost?.autor ?? '',
            local: currentPost?.local ?? '',
            categoria_id: currentPost?.categoria_id ?? '',
            conteudo: '',
            slug: ''
          }}
          validationSchema={PostagemSchema}
          onSubmit={(values) => {
            const postDetails = { ...values };
            postDetails.slug = toSlug(values?.titulo);
            postDetails.postagem_img = currentImage;

            if (currentPost) {
              updatePost({
                postagem: postDetails,
                id: currentPost?.id_postagem
              });
            }

            if (!currentPost) {
              setSlug(postDetails?.slug);

              const messageError =
                'Já existe uma postagem com esse título, por favor, altere o título da postagem.';

              if (allPosts?.result?.length) {
                toast.error(messageError);
                return;
              }

              createPost(postDetails);
            }

            router?.push('/painel/blog');
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
                        alt={`Capa da postagem ${values?.titulo}`}
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
                      touched?.postagem_img &&
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
                    onChange={handleChange}
                    name="titulo"
                    value={values?.titulo}
                    error={touched?.titulo && errors?.titulo}
                  />

                  <TextAreaDefault
                    label="Subtítulo"
                    placeholder="Subtítulo da Postagem"
                    onChange={handleChange}
                    name="subtitulo"
                    value={values?.subtitulo}
                    error={touched?.subtitulo && errors?.subtitulo}
                  />

                  <S.LineInputsWrapper>
                    <InputDefault
                      label="Autor"
                      placeholder="Autor da Postagem"
                      onChange={handleChange}
                      name="autor"
                      value={values?.autor}
                      error={touched?.autor && errors?.autor}
                    />
                    <InputDefault
                      label="Local"
                      placeholder="Local da Postagem"
                      onChange={handleChange}
                      name="local"
                      value={values?.local}
                      error={touched?.local && errors?.local}
                    />
                    <SelectDefault
                      label="Categoria"
                      placeholder="Categoria da Postagem"
                      onChange={handleChange}
                      name="categoria_id"
                      value={values?.categoria_id}
                      error={
                        touched?.categoria_id && {
                          message: errors?.categoria_id,
                          isError: true
                        }
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
                  >
                    <Link href="/painel/blog">Cancelar</Link>
                  </Button>
                  <Button
                    color="secondary"
                    radius="rounded"
                    degrade
                    type="submit"
                    onClick={() => setFieldValue('conteudo', editor?.getHTML())}
                  >
                    {currentPost ? 'Editar' : 'Publicar'} Postagem
                  </Button>
                </div>
              </S.ButtonsWrapper>
            </Form>
          )}
        </Formik>
      </S.Container>
    </>
  );
};

export default PostPanel;
