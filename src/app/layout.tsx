'use client';

import { GlobalStyles } from '@/styles/global';
import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Loading from './loading';
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
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <GlobalStyles />
          </StyledJsxRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
