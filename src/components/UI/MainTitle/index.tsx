import { ReactNode } from 'react';
import { number } from 'yup';
import * as S from "./styles"

interface IMainTitle {
  title: string;
}

const MainTitle = ({ title }: IMainTitle) => {
  return (
    <S.Container>
      <h1 className='title'>{title}</h1>
    </S.Container>
  );
};

export default MainTitle;


