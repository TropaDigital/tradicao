'use client';

import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import StyledJsxRegistry from '../registry';
import { Toasted } from '../../styles/toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StyledJsxRegistry>
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
