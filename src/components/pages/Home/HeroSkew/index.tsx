'use client';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Types
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
          placeholder="blur"
          priority={true}
        />
      </S.SkewContainer>
      <S.SubTitleWrapper>
        <p className="subtitle">{subtitle}</p>
      </S.SubTitleWrapper>
    </S.Container>
  );
}
