import React from 'react';
import * as S from './styles';

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelType?: "default" | "inner"
  error?: any;
}

export default function Inputdefault({ label, error, labelType = "default", ...rest }: IInputDefault) {
  return (
    <S.Container labelType={labelType}>
      {label && <label className="inputLabel">{label}</label>}
      <input className="inputField" {...rest}></input>
      {error && <span className='validationError'>{error}</span>}
    </S.Container>
  );
}
