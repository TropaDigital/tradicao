import React, { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface IModalDefault extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isModalOpen?: boolean;
}

const ModalDefault = ({ children, isModalOpen, ...rest }: IModalDefault) => {
  return (
    <S.OverlayContainer isOpen={isModalOpen}>
      <S.ModalContainer {...rest}>{children}</S.ModalContainer>
    </S.OverlayContainer>
  );
};

export default ModalDefault;
