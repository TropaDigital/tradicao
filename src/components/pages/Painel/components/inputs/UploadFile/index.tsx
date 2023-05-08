import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { Container, InputLabel, InputWrapper } from './styles';

interface IUploadFile {
  placeholder: string;
  label?: string;
  filename?: string;
  onPostFile: (
    responseURL: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  error?: string;
}

const UploadFile = ({
  placeholder,
  onPostFile,
  label,
  filename,
  error,
  ...rest
}: IUploadFile) => {
  const { postFile } = usePostFile();

  async function loadFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e?.target?.files) return;

    const file = e?.target?.files?.[0];

    const formData = new FormData();

    formData.append('file', file);

    const responseURL = await postFile(formData);

    onPostFile(responseURL, e);
  }

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <label>
          <input
            type="file"
            placeholder="Selecione o vídeo"
            onChange={loadFile}
            {...rest}
          />
          <p>{filename ? filename : placeholder}</p>
          <button>Buscar</button>
        </label>
        {error && <span className="validationError">{error}</span>}
      </InputWrapper>
    </Container>
  );
};

export default UploadFile;
