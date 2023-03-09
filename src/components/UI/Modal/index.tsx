import { PersonIcon } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

interface IModal {
  options: string[]
  isOpen: boolean
  ref: any
}

const Modal = ({ options, isOpen, ref, ...rest }: IModal) => {
  const generateSlug = (option: string) => {
    return option
      .trim()
      .replaceAll(' ', '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }

  return (
    <S.Container isOpen={isOpen} {...rest} ref={ref}>
      <ul>
        {options.map(option => {
          return (
            <>
              {option === 'Área do Cliente' ? (
                <Link href={generateSlug(option)} key={option}>
                  <li>
                    <PersonIcon />
                    {option}
                  </li>
                </Link>
              ) : (
                <Link href={generateSlug(option)} key={option}>
                  <li>{option}</li>
                </Link>
              )}
            </>
          )
        })}
      </ul>
    </S.Container>
  )
}

export default Modal
