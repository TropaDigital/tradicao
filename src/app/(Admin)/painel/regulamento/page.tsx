'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import Button from '@/components/UI/Button';
import { downloadText } from '@/utils/downloadText';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

const RegulamentoPanel = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Regulamento</p>'
  });

  function baixarTextao() {
    downloadText(editor?.getText());
  }

  return (
    <>
      <HeaderPage title="Regulamento Tradição" />

      <TextEditor editor={editor} />

      <Button degrade color="secondary" onClick={() => baixarTextao()}>
        Baixar
      </Button>
    </>
  );
};

export default RegulamentoPanel;
