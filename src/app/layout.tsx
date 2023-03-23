'use client';

import { GlobalStyles } from '@/styles/global';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Loading from './loading';
import StyledJsxRegistry from './registry';
import { Router } from 'next/router';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <html lang="pt-BR">
      <body>
        {loading ? (
          <Loading />
        ) : (
          <QueryClientProvider client={queryClient}>
            <StyledJsxRegistry>
              {children}
              <GlobalStyles />
            </StyledJsxRegistry>
          </QueryClientProvider>
        )}
      </body>
    </html>
  );
}
