import { RemoveImageIcon } from '@/assets/icons';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { useCreateAssembleia } from '@/services/assembleia/POST/useCreateAssembleia';
import { formatDate, formatStringToDate } from '@/utils/masks';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import * as S from '../styles';
import { IForm } from '../types';
import { InputWrapper } from './styles';
import { assembleiaSchema } from './yupSchema';

const FormAssembleia = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();
  const [planilhaUrl, setPlanilhaUrl] = useState<string>();
  const [planilhaError, setPlanilhaError] = useState<string>();

  const { createAssembleia } = useCreateAssembleia();
  const { postFile } = usePostFile();

  async function handleSetPlanilha(e: React.ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      const formData = new FormData();
      formData.set('file', e?.target?.files[0]);

      setPlanilhaUrl(await postFile(formData));

      setPlanilhaPost(e?.target?.files[0]);
    }
  }

  function validatePlanilhaExtension(e: React.ChangeEvent<HTMLInputElement>) {
    const acceptedFiles = ['xlsx', 'xls', 'csv', 'ods', 'xltx', 'xlsm'];

    if (e?.target?.files) {
      const file = e?.target?.files[0];

      const extension = file?.name?.split('.')?.pop()?.toLowerCase();

      acceptedFiles?.forEach((extensionType) => {
        if (extensionType !== extension) {
          setPlanilhaError('Arquivo inválido!');
          return true;
        } else {
          setPlanilhaError('');
          return false;
        }
      });
    }
  }

  const tiposDeAssembleias = [
    'Selecione um tipo',
    'Contemplados',
    'Excluídos',
    'Suplência'
  ];

  return (
    <S.Container>
      <Formik
        initialValues={{
          planilha: {} as File,
          tipo: '',
          titulo: '',
          data_assembleia: '',
          url_planilha: '',
          url_imagem: ''
        }}
        validationSchema={assembleiaSchema}
        onSubmit={async (values) => {
          if (planilhaPost) {
            const formData = new FormData();

            formData?.append('planilha', planilhaPost);
            formData?.append('tipo', values?.tipo);
            formData?.append('titulo', values?.titulo);
            formData?.append('url_planilha', planilhaUrl ? planilhaUrl : '');
            formData?.append('url_imagem', values?.url_imagem);
            formData?.append('data', values?.data_assembleia);

            createAssembleia(formData);
          }

          onSubmit();
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          touched,
          errors
        }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Criar Assembleia</h2>

              <div className="inputsProductWrapper">
                {values?.url_imagem && (
                  <div className="assembleiaCapaContainer">
                    <div
                      className="removeImageOverlay"
                      onClick={() => setFieldValue('url_imagem', '')}
                    >
                      <RemoveImageIcon size={64} />
                    </div>
                    <Image
                      src={values?.url_imagem}
                      alt="Imagem de Assembleia"
                      width={490}
                      height={200}
                    />
                  </div>
                )}
                {!values?.url_imagem && (
                  <InputImage
                    onPostImage={(imageUrl) =>
                      setFieldValue('url_imagem', imageUrl)
                    }
                    title="Adicionar Capa"
                    accept="image/*"
                    error={touched?.url_imagem && errors?.url_imagem}
                  />
                )}

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Título *"
                    placeholder="Contemplados"
                    value={values?.titulo}
                    name="titulo"
                    onChange={handleChange}
                    error={touched?.titulo && errors?.titulo}
                  />

                  <SelectDefault
                    label="Tipo de Assembleia *"
                    name="tipo"
                    onChange={handleChange}
                    error={touched?.tipo && errors?.tipo}
                  >
                    {tiposDeAssembleias?.map((tipo, key) => (
                      <option
                        value={tipo === 'Selecione um tipo' ? '' : tipo}
                        key={key}
                      >
                        {tipo}
                      </option>
                    ))}
                  </SelectDefault>
                </div>

                <InputDefault
                  label="Data de Assembleia *"
                  placeholder="18/07/2021"
                  name="data_assembleia"
                  type="date"
                  value={values?.data_assembleia}
                  onChange={handleChange}
                  error={touched?.data_assembleia && errors?.data_assembleia}
                />

                <InputWrapper>
                  <label>
                    <input
                      type="file"
                      placeholder="Selecione o arquivo"
                      onChange={(e) => {
                        validatePlanilhaExtension(e);
                        handleSetPlanilha(e);
                      }}
                      accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet"
                    />
                    <p>{planilhaPost?.name ?? 'Selecione uma planilha'}</p>
                    <button>Buscar</button>
                  </label>
                  {planilhaError && (
                    <span className="validationError">{planilhaError}</span>
                  )}
                </InputWrapper>

                <div className="lineElementsWrapper buttonsWrapper">
                  <ButtonDefault
                    color="transparent"
                    type="button"
                    onClick={() => onSubmit()}
                    className="button"
                  >
                    Cancelar
                  </ButtonDefault>
                  <ButtonDefault
                    color="darkButton"
                    className="button"
                    type="submit"
                  >
                    {modalOpen === 'publicar' ? 'Adicionar' : 'Atualizar'}
                  </ButtonDefault>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormAssembleia;
