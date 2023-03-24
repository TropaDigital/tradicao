'use client';

import LoadingContainer from '@/components/shared/LoadingContainer';
import { GlobalStyles } from '@/styles/global';
import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import StyledJsxRegistry from './registry';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledJsxRegistry>
            {children}
            <GlobalStyles />
          </StyledJsxRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
