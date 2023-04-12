'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import { SelectDefault } from '@/components/pages/Painel/components/inputs/SelectDefault';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import * as S from './styles';

const CreatePostPanel = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Criar postagem</p>'
  });

  return (
    <>
      <HeaderPage title="Criar Postagem" />

      <S.Container>
        <InputDefault label="Título" />
        <InputDefault label="Subtítulo" />
        <TextEditor editor={editor} />
      </S.Container>
    </>
  );
};

export default CreatePostPanel;
