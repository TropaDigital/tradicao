'use client';

// React
import { useEffect } from 'react';

// Styles
import StyledJsxRegistry from './registry';
import { GlobalStyles } from '@/styles/global';
import { Toasted } from '@/styles/toast';

// Libraries
import { QueryClientProvider, QueryClient } from 'react-query';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-3LNMB2ZH0R`}
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
        />
      </head>
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3LNMB2ZH0R"
        ></script>
        <script
          src="//tag.goadopt.io/injector.js?website_code=cf3c01fb-bc26-4d96-a464-74c2189d951f"
          className="adopt-injector"
        ></script>
        <script
          async
          src="//titulares.becompliance.com/becompliance.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                becompliance_form.create_form({
                  client : 'f091c8ff-b0ca-4aff-bbea-5ae6f14822b3',
                  form : 'dad46e5b-247f-4dd5-925e-c142c7dfef2d'
                })
                `
          }}
        ></script>
      </body>
    </html>
  );
}
