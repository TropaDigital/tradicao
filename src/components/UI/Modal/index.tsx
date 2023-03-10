import React, { ReactNode } from 'react'
import * as S from './styles'

interface IModal {
  isOpen: boolean
  children: ReactNode;
}

const Modal = ({ children, isOpen, ...rest }: IModal) => {
  return (
    <S.Container isOpen={isOpen} {...rest}>
      {children}
    </S.Container>
  )
}

export default Modal
