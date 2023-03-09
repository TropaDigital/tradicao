import React, { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IDefaultButton {
  children: ReactNode
  variant?: 'default' | 'outline'
  radius?: 'default' | 'rounded'
  weight?: '500' | '700'
  color?: "primary" | "secondary" | string;
  icon?: ReactNode;
}

const Button = ({
  children,
  variant,
  icon,
  radius,
  weight,
  color,
  ...rest
}: IDefaultButton) => {
  return (
    <>
      <ButtonContainer
        {...rest}
        variant={variant}
        radius={radius}
        weight={weight}
        color={color}
      >
        {icon && icon}
        {children}
      </ButtonContainer>
    </>
  )
}

export default Button
