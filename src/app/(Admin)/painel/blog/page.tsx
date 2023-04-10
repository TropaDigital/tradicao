'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import Button from '@/components/UI/Button';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { HeaderDashboard } from '../styles';

const BlogPanel = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>'
  });

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Blog" />

        <div className="buttonWrapper">
          <Button
            color="secondary"
            degrade
            radius="rounded"
            className="styledButton"
          >
            + Adicionar Postagem
          </Button>
        </div>
      </HeaderDashboard>
      <TextEditor editor={editor} />
    </>
  );
};

export default BlogPanel;
