import { DefaultBrasao } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import * as S from './styles';

interface ICardAssembleia {
  title: string;
  data: string;
}

const CardAssembleia = ({ title, data }: ICardAssembleia) => {
  return (
    <S.CardContemplated>
      <S.CardTopContemplated>
        <span>{data}</span>
        <Image
          src={'/images/happy-couple-phone-looking.jpg'}
          width={400}
          height={200}
          className="image"
          alt="Casal feliz olhando para o telefone"
        />
        <div className="icon">
          <DefaultBrasao />
        </div>
      </S.CardTopContemplated>

      <S.CardBottomContemplated>{title}</S.CardBottomContemplated>
    </S.CardContemplated>
  );
};

export default CardAssembleia;
