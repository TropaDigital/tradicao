'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { IGetPosts } from '@/services/blog/posts/types';
import { useEditor } from '@tiptap/react';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import React from 'react';
import * as S from './styles';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';

const PostPanel = () => {
  const { postFile } = usePostFile();

  const currentPost: IGetPosts = JSON.parse(
    localStorage?.getItem('actualPost') as any
  );

  const editor = useEditor({
    extensions: [
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
      Image.configure({
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

          uploadDraggedImage(formData).then((imageUrl) => {
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

  async function uploadDraggedImage(formData: FormData) {
    return await postFile(formData);
  }

  if (!editor) {
    return null;
  }

  return (
    <>
      <HeaderPage title="Postagem" />

      <S.Container>
        <div>
          <InputDefault label="Título" value={currentPost?.titulo ?? ''} />
          <InputDefault
            label="Subtítulo"
            value={currentPost?.subtitulo ?? ''}
          />
        </div>
        <TextEditor editor={editor} />
      </S.Container>
    </>
  );
};

export default PostPanel;
