import SkewImage from "@/components/shared/SkewImage";
import * as S from "./styles";
import { IHeroSkew } from "./types";


export default function HeroSkew({
altBackgroundImage,
backgroundColor='var(gray-500)',
backgroundImage,
Children    
}:IHeroSkew){
    return (
        <S.Container>
            <SkewImage
            alt={altBackgroundImage}
            src={backgroundImage}
            imageHeigth={434}
            />
        </S.Container>
    )
}