'use client';

import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import StyledJsxRegistry from '../registry';
import { Toasted } from '../../styles/toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StyledJsxRegistry>
        <NextNProgress
          color="var(--primary)"
          startPosition={0.3}
          stopDelayMs={200}
          height={10}
          showOnShallow={true}
        />
        <Header />
        <Toasted>
          <ToastContainer
            position="top-center"
            autoClose={3500}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
          />
        </Toasted>
        {children}
        <Footer />
      </StyledJsxRegistry>
    </section>
  );
}
