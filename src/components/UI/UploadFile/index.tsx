import React from 'react';
import * as S from "./styles"

interface IUploadFile extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | string[];
}

const UploadFile = ({ label, error, ...rest }: IUploadFile) => {
  return (
    <S.Container>
      {label && <label className='input-label'>{label}</label>}
      <S.InputWrapper>
        <label>
          <p>Selecione o arquivo</p>
          <input type="file" {...rest} />
          <button>Buscar</button>
        </label>
      </S.InputWrapper>
      {error && <span className='validation-error'>{error}</span>}
    </S.Container>
  );
};

export default UploadFile;
