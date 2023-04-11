'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

const RegulamentoPanel = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Regulamento</p>'
  });

  return (
    <>
      <HeaderPage title="Regulamento Tradição" />

      <TextEditor editor={editor} />
    </>
  );
};

export default RegulamentoPanel;
