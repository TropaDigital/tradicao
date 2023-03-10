import React, { ReactNode } from 'react'
import * as S from './styles'

interface IModal {
  isOpen: boolean
  children: ReactNode;
  wrapperRef?: any
}

const Modal = ({ children, isOpen, wrapperRef, ...rest }: IModal) => {
  return (
    <S.Container isOpen={isOpen} {...rest} ref={wrapperRef}>
      {children}
    </S.Container>
  )
}

export default Modal
