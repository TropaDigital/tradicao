'use client';

// React
import React from 'react';

// Next
import { usePathname } from 'next/navigation';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import { Container } from '../styles';
import MainTitle from '@/components/UI/MainTitle';

const DemonstracaoView = () => {
  const pathName = usePathname();

  const filePath = pathName?.split('/')?.pop();

  return (
    <CenterWrapper>
      <Container>
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
