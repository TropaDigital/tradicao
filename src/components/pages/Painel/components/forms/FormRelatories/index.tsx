import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { relatoriesSchema } from './yupSchema';
import DefaultInput from '@/components/UI/DefaultInput';
import { IForm } from '../types';
import UploadFile from '@/components/UI/UploadFile';
import { useCreateRelatorio } from '@/services/relatorios/POST/useCreateRelatorio';
import { useUpdateRelatorio } from '@/services/relatorios/PUT/useUpdateRelatorio';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { onlyLetterMask } from '@/utils/masks';

const FormRelatories = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [fileName, setFileName] = useState('');

  const { createRelatorio } = useCreateRelatorio();
  const { updateRelatorio } = useUpdateRelatorio();

  useEffect(() => {
    if (actualItem) setFileName(actualItem?.titulo);
  }, [actualItem]);

  return (
    <S.Container>
      <Formik
        initialValues={{
          titulo: actualItem?.titulo ?? '',
          url_pdf: actualItem?.pdfData[0]?.url_pdf ?? '',
          status: actualItem?.status ?? 'Ativo'
        }}
        validationSchema={relatoriesSchema}
        onSubmit={(values) => {
          if (modalOpen === 'publicar') {
            createRelatorio({
              titulo: values?.titulo,
              url_pdf: [values?.url_pdf],
              status: values?.status
            });
          }

          if (modalOpen === 'editar') {
            updateRelatorio({
              putBody: {
                titulo: values?.titulo,
                url_pdf: [values?.url_pdf],
                status: values?.status
              },
              id: actualItem?.id_relatorio
            });
          }

          setFileName('');
          onSubmit();
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          handleChange
        }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Relatório de Ouvidoria</h2>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Título"
                  placeholder="Título da Demonstração"
                  name="titulo"
                  value={values?.titulo}
                  onChange={handleChange}
                  error={touched?.titulo && errors?.titulo}
                />

                <UploadFile
                  onPostFile={(file, e) => {
                    setFieldValue('url_pdf', file);
                    setFileName(e?.target?.value?.replace(/.*[\/\\]/, ''));
                  }}
                  label="Arquivo de Relatório de Ouvidoria"
                  filename={fileName}
                  className="inputField"
                  name="url_pdf"
                  errors={touched?.url_pdf && errors?.url_pdf}
                />

                <SelectDefault
                  label="Status"
                  name="status"
                  value={values?.status}
                  onChange={handleChange}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </SelectDefault>

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
                    {modalOpen === 'publicar' ? 'Publicar' : 'Atualizar'}
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

export default FormRelatories;
