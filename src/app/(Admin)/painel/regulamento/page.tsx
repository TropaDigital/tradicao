'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import TextEditor from '@/components/pages/Painel/components/TextEditor';
import Button from '@/components/UI/Button';
import { downloadText } from '@/utils/downloadText';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const RegulamentoPanel = () => {
  return (
    <>
      <HeaderPage title="Regulamento Geral" />

      <S.ObjectWrapper>
        <object
          data="https://bucket.backendtropa.com.br/file/098b994c-e5ee-4fa9-84e3-b1793deadc85"
          type="application/pdf"
        >
          <p>Não foi possível mostrar o Regulamento</p>
        </object>
      </S.ObjectWrapper>

      <Button degrade color="secondary" type="button">
        Editar
      </Button>
    </>
  );
};

export default RegulamentoPanel;
