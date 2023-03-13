import React, { ReactElement, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface IDefaultButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline';
  radius?: 'default' | 'rounded';
  weight?: 500 | 700;
  color?: 'primary' | 'secondary' | string;
  icon?: ReactNode;
  degrade?: boolean;
}

const Button = ({
  children,
  variant,
  icon,
  radius,
  weight = 700,
  color,
  degrade,
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
        degrade={degrade}
      >
        {icon && icon}
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;
