import SkewImage from '@/components/shared/SkewImage';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import * as S from './styles';
import { IHeroSkew } from './types';

export default function HeroSkew({
  altBackgroundImage,
  backgroundImage,
  subtitle
}: IHeroSkew) {
  return (
    <S.Container>
      <S.SolidBackground />
      <S.SkewContainer>
        <Image 
        src={backgroundImage}
        alt={altBackgroundImage}
        className="skewImage"
        />
      </S.SkewContainer>
      <S.SubTitleWrapper>
          <p className='subtitle'>{subtitle}</p>
      </S.SubTitleWrapper>
    </S.Container>
  ); 
}
