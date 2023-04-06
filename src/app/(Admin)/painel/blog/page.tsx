'use client';

import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Button from '@/components/UI/Button';
import React from 'react';
import { HeaderDashboard } from '../styles';

const BlogPanel = () => {
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
            + Criar Postagem
          </Button>
        </div>
      </HeaderDashboard>
      <span>Aqui será o painel de Blog :D</span>
    </>
  );
};

export default BlogPanel;
