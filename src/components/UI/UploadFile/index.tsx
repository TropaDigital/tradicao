import { usePostCurriculum } from '@/services/curriculum/POST/usePostCurriculum';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface IUploadFile extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string | any;
  onPostFile: (curriculum: string) => void;
  filename?: () => void;
}

const UploadFile = ({ label, errors, onPostFile, ...rest }: IUploadFile) => {
  const [fileName, setFileName] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if(errors) setError(errors)
  }, [errors])

  const { postCurriculum } = usePostCurriculum();

  const loadCurriculum = async (file: React.ChangeEvent<HTMLInputElement>) => {
    let formData = new FormData();
    if (file.target.files?.length) {
      formData.set('file', file?.target?.files[0]);
      let response: any = await postCurriculum(formData);
      onPostFile(response);
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

    return isAValidExtension.includes(true);
  };

  return (
    <S.Container>
      {label && <label className="input-label">{label}</label>}
      <S.InputWrapper>
        <label>
          <p>{fileName ? `${fileName}` : 'Selecione o arquivo'}</p>
          <input
            type="file"
            {...rest}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const isAValidExtension = validateFileExtension(e);

              if (isAValidExtension) {
                loadCurriculum(e);
                setFileName(e?.target?.value?.replace(/.*[\/\\]/, ''));
                setError("")
              } else if (!isAValidExtension && e.target.value) {
                setError('São aceitos somente arquivos .pdf | .doc | .docx');
              }
            }}
          />
          <button>Buscar</button>
        </label>
      </S.InputWrapper>
      {error && <span className="validation-error">{error}</span>}
    </S.Container>
  );
};

export default UploadFile;
