'use client';

// React
import React from 'react';

// Next
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';

// Styles
import { ButtonWrapper, Container } from './styles';
import Button from '@/components/UI/Button';

const RelatorioView = () => {
  const pathName = usePathname();

  const filePath = pathName?.split('/')?.pop();

  return (
    <CenterWrapper>
      <Container>
        <ButtonWrapper>
          <Button degrade radius="rounded">
            <Link href="/relatorios-de-ouvidoria">Voltar</Link>
          </Button>
        </ButtonWrapper>

        <MainTitle title="Visualização Relatório" />

        <iframe
          src={`https://bucket.trad1.com.br/file/${filePath}#toolbar=0`}
          width="100%"
          height="800px"
        >
          Não foi possível exibir{' '}
          <a href={`https://bucket.trad1.com.br/file/${filePath}`} download>
            PDF
          </a>
        </iframe>
      </Container>
    </CenterWrapper>
  );
};

export default RelatorioView;
