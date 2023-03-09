import Image from 'next/image'
import React from 'react'
import { ISkewContainer } from './types'
import * as S from "./styles"

const SkewContainer = ({ imageAlt, imageSrc, size }: ISkewContainer) => {
  return (
    <S.Container size={size}>
        <Image src={imageSrc} alt={imageAlt} className="skewImage"/>
    </S.Container>
  )
}

export default SkewContainer