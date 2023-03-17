'use client';

import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import { GlobalStyles } from '@/styles/global';
import StyledJsxRegistry from '../registry';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StyledJsxRegistry>
        <Header />
        {children}
        <Footer />
        {/* <GlobalStyles /> */}
      </StyledJsxRegistry>
    </section>
  );
}
