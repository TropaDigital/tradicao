import Image from 'next/image';
import * as S from './styles';

interface ISkewImage {
  src: string | any;
  alt: string;
  imageHeigth: number;
}

export default function skewImage({ src, alt, imageHeigth }: ISkewImage) {
  return (
    <S.Container style={{ height: imageHeigth }}>
      <div className="imageWrapper">
        <Image src={src} alt={alt} />
      </div>
    </S.Container>
  );
}
