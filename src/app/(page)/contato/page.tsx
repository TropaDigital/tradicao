import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Container } from './styles';

const inter = Inter({ subsets: ['latin'] });

export default function Contato() {
  return (
    <Container>
      <Link href="/">Home</Link>

      <span>Hello Contato</span>
    </Container>
  );
}
