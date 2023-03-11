import { Children, ReactNode } from 'react'
import * as S from './styles'

interface ICenterWrapper {
    children: ReactNode
}

export default function CenterWrapper({ children }:ICenterWrapper){
    return (
        <S.ContentWrapper>
            <div className="content">
                {children}
            </div>
        </S.ContentWrapper>
    )
}