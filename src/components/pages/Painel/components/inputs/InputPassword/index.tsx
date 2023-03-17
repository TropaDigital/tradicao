import { EyeIcon, EyeIconClose } from '@/assets/icons'
import React, { ReactNode, useState } from 'react'
import * as S from './styles'

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  labelType?: 'default' | 'inner'
  error?: any
  icon?: ReactNode
}

export default function InputPassword({
  label,
  error,
  icon,
  labelType = 'default',
  ...rest
}: IInputDefault) {
  const [visibility, setVisibility] = useState<boolean>(false)

  return (
    <>
      <S.Container labelType={labelType} icon={icon} className="inputWrapper">
        <label className="inputLabel">{label}</label>
        <div className='inputContainer'>
          <span className='iconWrapper'>{icon}</span>
          <input
            className="inputField"
            {...rest}
            type={visibility ? 'text' : 'password'}
          ></input>
          <button
            type="button"
            className="eyeIcon"
            onClick={() => {
              setVisibility(!visibility)
            }}
          >
            {visibility ? <EyeIconClose /> : <EyeIcon />}
          </button>
        </div>
        {error && <span className="validationError">{error}</span>}
      </S.Container>
    </>
  )
}
