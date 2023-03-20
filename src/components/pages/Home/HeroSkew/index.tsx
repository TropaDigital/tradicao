import SkewImage from '@/components/shared/SkewContainer/SkewImage';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import * as S from './styles';
import { IHeroSkew } from './types';

export default function HeroSkew({
  altBackgroundImage,
  backgroundImage,
  solidHeight,
  subtitle
}: IHeroSkew) {
  return (
    <S.Container>
      <S.SolidBackground height={solidHeight} />
      <S.SkewContainer>
        <Image
          src={backgroundImage}
          alt={altBackgroundImage}
          className="skewImage"
        />
      </S.SkewContainer>
      <S.SubTitleWrapper>
        <p className="subtitle">{subtitle}</p>
      </S.SubTitleWrapper>
    </S.Container>
  );
}
