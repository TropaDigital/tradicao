import React, { HTMLAttributes, ReactNode } from 'react'
import * as S from "./styles"

interface IModalDefault extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const ModalDefault = ({ children, ...rest }: IModalDefault) => {
  return (
    <S.OverlayContainer>
        <S.ModalContainer {...rest} >
            {children}
        </S.ModalContainer>
    </S.OverlayContainer>
  )
}

export default ModalDefault