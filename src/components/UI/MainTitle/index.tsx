import { ReactNode } from 'react';
import { number } from 'yup';
import * as S from "./styles"

interface IMainTitle {
  title: string;
  subtitle?: string;
}

const MainTitle = ({ title, subtitle }: IMainTitle) => {
  return (
    <S.Container>
      <h2>| {title}</h2>
      <h3>{subtitle}</h3>
    </S.Container>
  );
};

export default MainTitle;


