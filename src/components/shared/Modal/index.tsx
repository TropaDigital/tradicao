import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import React, { HTMLAttributes, ReactNode, useRef, useState } from 'react';
import * as S from './styles';

interface IModalDefault extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  setOpenState?: React.Dispatch<boolean>;
  openState?: boolean;
}

const ModalDefault = ({
  children,
  setOpenState,
  openState,
  ...rest
}: IModalDefault) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenState);

  return (
    <S.OverlayContainer isOpen={openState}>
      <S.ModalContainer ref={wrapperRef} {...rest}>
        {children}
      </S.ModalContainer>
    </S.OverlayContainer>
  );
};

export default ModalDefault;
