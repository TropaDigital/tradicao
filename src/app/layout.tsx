'use client';

import { GlobalStyles } from '@/styles/global';
import { Toasted } from '@/styles/toast';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import StyledJsxRegistry from './registry';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, useDeferredValue } from 'react';
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

        <script
          src="//titulares.becompliance.com/becompliance.js"
          defer
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3LNMB2ZH0R"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-3LNMB2ZH0R');
              `
          }}
        ></script>
        <script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/62afde1d-bc84-4c9b-a382-a60fea3f34a4-loader.js"
          async
        ></script>
      </body>
    </html>
  );
}
