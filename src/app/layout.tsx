'use client';

import { GlobalStyles } from '@/styles/global';
import { Toasted } from '@/styles/toast';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import StyledJsxRegistry from './registry';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      delay: 300
    });
  }, []);

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledJsxRegistry>
            <Toasted>
              <ToastContainer
                position="top-right"
                autoClose={3500}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
              />
            </Toasted>
            {children}
            <GlobalStyles />
          </StyledJsxRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
