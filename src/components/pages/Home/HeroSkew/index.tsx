import SkewImage from '@/components/shared/SkewImage';
import Button from '@/components/UI/Button';
import * as S from './styles';
import { IHeroSkew } from './types';

export default function HeroSkew({
  altBackgroundImage,
  backgroundImage,
  children
}: IHeroSkew) {
  return (
    <S.Container>
      <S.BackgroundSection />
      <div className="skewImageWrapper">
        <SkewImage
          alt={altBackgroundImage}
          src={backgroundImage}
          imageHeigth={434}
        />
      </div>
      <span className="chidrenWrapper">
        {children && children}
      </span>
    </S.Container>
  ); 
}
