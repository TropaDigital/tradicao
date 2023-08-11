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
import Head from 'next/head';

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PH25RMN');`
          }}
        />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-X3SM6Q273G');`
          }}
        />
      </Head>
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X3SM6Q273G"
        ></script>
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
