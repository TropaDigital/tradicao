import * as S from './styles';
import { IContemplatedCardProps } from './types';

export default function ContemplatedValueCard({
  text
}: IContemplatedCardProps) {
  return (
    <S.ContemplatedCardValue>
      {text === 'R$' ? (
        <S.ContemplatedCardTextSmall>{text}</S.ContemplatedCardTextSmall>
      ) : (
        <S.ContemplatedCardTextLarge>{text}</S.ContemplatedCardTextLarge>
      )}
    </S.ContemplatedCardValue>
  );
}
