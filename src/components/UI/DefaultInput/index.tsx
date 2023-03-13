import React, { ReactNode } from 'react';
import * as S from './styles';

interface IDefaultInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  placeholder?: string;
  label?: string;
  error?: string | false;
}

const DefaultInput = ({ icon, label, error, ...rest }: IDefaultInput) => {
  return (
    <S.Container>
      {label && (
        <label
          className="input-label"
          htmlFor={label?.trim().replaceAll(' ', '-').toLowerCase()}
        >
          {label}
        </label>
      )}
      <S.InputWrapper icon={icon}>
        {icon && icon}
        <input
          type="text"
          {...rest}
          id={label && label?.trim().replaceAll(' ', '-').toLowerCase()}
        />
      </S.InputWrapper>
      {error && <span className="validation-error">{error}</span>}
    </S.Container>
  );
};

export default DefaultInput;
