import React, { ReactNode } from 'react'
import * as S from './styles'

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  label?: string
  error?: string | null
}

export default function InputIcon({
  icon,
  label,
  error,
  ...rest
}: IInputDefault) {
  return (
    <S.Container>
      {label && <label className="inputLabel">{label}</label>}
      <div className='inputContainer'>
        <span className="iconWrapper">{icon}</span>
        <input className="inputField" {...rest}></input>
      </div>
      {error && <span className="validationError">{error}</span>}
    </S.Container>
  )
}
