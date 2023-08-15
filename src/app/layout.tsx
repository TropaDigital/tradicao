'use client';

// React
import { useEffect } from 'react';

// Styles
import StyledJsxRegistry from './registry';
import { GlobalStyles } from '@/styles/global';
import { Toasted } from '@/styles/toast';

// Libraries
import { QueryClientProvider, QueryClient } from 'react-query';

import TagManager from 'react-gtm-module';

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
    TagManager.initialize({ gtmId: 'GTM-PH25RMN' });

    AOS.init({
      delay: 300
    });
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://consorciotradicao.com.br/" />
        <meta property="og:title" content="Consórcio Tradição" />
        <meta
          property="og:description"
          content="O Consórcio Tradição: Soluções financeiras personalizadas com transparência e ética. Mais de 20 anos de experiência proporcionando uma jornada de consórcio única e satisfatória. Nossa equipe capacitada guia você desde o plano até a contemplação. Confie na nossa tradição para o seu sucesso."
        />
        <meta
          property="og:image"
          content="https://bucket.trad1.com.br/file/c51176eb-ae9f-40df-95ee-61b20a6b3af6"
        />

        <meta property="og:type" content="website" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://consorciotradicao.com.br/"
        />
        <meta property="twitter:title" content="Consórcio Tradição" />
        <meta
          property="twitter:description"
          content="O Consórcio Tradição: Soluções financeiras personalizadas com transparência e ética. Mais de 20 anos de experiência proporcionando uma jornada de consórcio única e satisfatória. Nossa equipe capacitada guia você desde o plano até a contemplação. Confie na nossa tradição para o seu sucesso."
        />
        <meta
          property="twitter:image"
          content="https://bucket.trad1.com.br/file/c51176eb-ae9f-40df-95ee-61b20a6b3af6"
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PH25RMN"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
          }}
        />
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
          src="//tag.goadopt.io/injector.js?website_code=cf3c01fb-bc26-4d96-a464-74c2189d951f"
          className="adopt-injector"
        ></script>
        <script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/62afde1d-bc84-4c9b-a382-a60fea3f34a4-loader.js"
        ></script>
      </body>
    </html>
  );
}
