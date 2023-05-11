'use client';

// React
import React from 'react';

// Next
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import Button from '@/components/UI/Button';

// Styles
import { ButtonWrapper, Container } from './styles';

const DemonstracaoView = () => {
  const pathName = usePathname();

  const filePath = pathName?.split('/')?.pop();

  return (
    <CenterWrapper>
      <Container>
        <ButtonWrapper>
          <Button degrade radius="rounded">
            <Link href="/demonstracoes-financeiras">Voltar</Link>
          </Button>
        </ButtonWrapper>

        <MainTitle title="Visualização Demonstração" />

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

export default DemonstracaoView;