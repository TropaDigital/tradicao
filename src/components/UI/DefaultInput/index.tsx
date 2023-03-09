import React, { ReactNode } from 'react';
import * as S from './styles';

interface IDefaultInput {
  icon?: ReactNode;
  placeholder?: string;
}

const DefaultInput = ({ icon, ...rest }: IDefaultInput) => {
  return (
    <>
      <S.Container icon={icon}>
        {icon && icon}
        <input type="text" {...rest} />
      </S.Container>
    </>
  );
};

export default DefaultInput;
