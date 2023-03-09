import { GlobalStyles } from '@/styles/global';
import StyledJsxRegistry from '../registry';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StyledJsxRegistry>
        <nav>
          Layout Painel
        </nav>
        {children}
        <GlobalStyles />
      </StyledJsxRegistry>
    </section>
  );
}
