import { usePostCurriculum } from '@/services/curriculum/POST/usePostCurriculum';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface IUploadFile extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string | any;
  onPostFile: (
    curriculum: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  filename: string;
}

const UploadFile = ({
  label,
  errors,
  onPostFile,
  filename,
  ...rest
}: IUploadFile) => {
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (errors) setError(errors);
  }, [errors]);

  const { postCurriculum } = usePostCurriculum();

  const loadCurriculum = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let formData = new FormData();
    if (e?.target?.files?.length) {
      formData.set('file', e?.target?.files[0]);
      let response: any = await postCurriculum(formData);
      onPostFile(response, e);
    }
  };

  const validateFileExtension = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return false;

    const allowedExtensions = new Array('pdf', 'docx', 'doc');
    const actualFileExtension = e?.target?.value
      ?.split('.')
      ?.pop()
      ?.toLowerCase();

    const isAValidExtension = allowedExtensions?.map((extension) =>
      extension === actualFileExtension ? true : false
    );

    if (isAValidExtension?.includes(true)) {
      loadCurriculum(e);
      setError('');
      return;
    }
    setError('São aceitos somente arquivos .pdf | .doc | .docx');
  };

  return (
    <S.Container>
      {label && <label className="input-label">{label}</label>}
      <S.InputWrapper>
        <label>
          <p>{filename ? `${filename}` : 'Selecione o arquivo'}</p>
          <input
            type="file"
            {...rest}
            onChange={validateFileExtension}
            accept=".pdf, .doc, .docx"
          />
          <button>Buscar</button>
        </label>
      </S.InputWrapper>
      {error && <span className="validation-error">{error}</span>}
    </S.Container>
  );
};

export default UploadFile;
