import SkewImage from '@/components/shared/SkewImage';
import * as S from './styles';
import { IHeroSkew } from './types';

export default function HeaderSkew({
  altBackgroundImage,
  backgroundImage,
  children
}: IHeroSkew) {
  return (
    <S.Container >
      <S.BackgroundSection />
      <div className="skewImageWrapper">
        <SkewImage
          alt={altBackgroundImage}
          src={backgroundImage}
          imageHeigth={234}
        />
      </div>
      <span className="chidrenWrapper">
        {children && children}
      </span>
    </S.Container>
  );
}
