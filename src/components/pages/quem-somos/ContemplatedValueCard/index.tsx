import { HTMLAttributes } from 'react';
import * as S from './styles';
import { IContemplatedCardProps } from './types';

export default function ContemplatedValueCard({
  text,
  ...rest
}: IContemplatedCardProps) {
  return (
    <S.ContemplatedCardValue {...rest}>
      {text === 'R$' ? (
        <S.ContemplatedCardTextSmall>{text}</S.ContemplatedCardTextSmall>
      ) : (
        <S.ContemplatedCardTextLarge>{text}</S.ContemplatedCardTextLarge>
      )}
    </S.ContemplatedCardValue>
  );
}
