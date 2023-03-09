import React, { ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface IDefaultButton {
  children: ReactNode;
  variant?: 'default' | 'outline';
  radius?: 'default' | 'rounded';
  weight?: '500' | '700';
  color?: 'primary' | 'secondary' | string;
  icon?: ReactNode;
  degrade?: boolean;
  buttonWidth?: number;
}

const Button = ({
  children,
  variant,
  icon,
  radius,
  weight,
  color,
  buttonWidth,
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
        buttonWidth={buttonWidth}
        degrade={degrade}
      >
        {icon && icon}
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;
