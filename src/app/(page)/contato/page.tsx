import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../../../public/m10.png'
import { Container } from './styles';

const inter = Inter({ subsets: ['latin'] });

export default function Contato() {
  return (
    <Container>
      <Link href="/">Home</Link>

      <div className="content">
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500} 
        height={500} 
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      </div>
    </Container>
  );
}
