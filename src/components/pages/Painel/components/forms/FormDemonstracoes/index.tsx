import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { demonstracaoSchema } from './yupSchema';
import { TrashIcon } from '@/assets/icons';
import DefaultInput from '@/components/UI/DefaultInput';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { IContempladoImages } from '@/services/contemplados/types';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useUpdateContemplado } from '@/services/contemplados/PUT/useUpdateContemplado';
import { useCreateContemplado } from '@/services/contemplados/POST/useCreateContemplado';
import { IForm } from '../types';
import UploadFile from '@/components/UI/UploadFile';
import SelectInput from '@mui/material/Select/SelectInput';
import { useCreateDemonstracao } from '@/services/demonstracoes/POST/useCreateDemonstracao';
import { useUptadeDemonstracao } from '@/services/demonstracoes/PUT/useUpdateDemonstracoes';

const FormDemonstracoes = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [fileName, setFileName] = useState('');

  const { createDemonstracao } = useCreateDemonstracao();
  const { updateDemonstracao } = useUptadeDemonstracao();

  useEffect(() => {
    if (actualItem) setFileName(actualItem?.titulo);
  }, [actualItem]);

  return (
    <S.Container>
      <Formik
        initialValues={{
          titulo: actualItem?.titulo ?? '',
          url_pdf: actualItem?.demonstracaoPDF[0]?.url_pdf ?? [],
          status: actualItem?.status ?? 'Ativo'
        }}
        validationSchema={demonstracaoSchema}
        onSubmit={(values) => {
          if (modalOpen === 'publicar') {
            createDemonstracao({
              titulo: values?.titulo,
              url_pdf: values?.url_pdf,
              status: values?.status
            });
          }

          if (modalOpen === 'editar') {
            updateDemonstracao({
              demonstracaoBody: {
                titulo: values?.titulo,
                url_pdf: values?.url_pdf,
                status: values?.status
              },
              id: actualItem?.id_demo_financeira
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
              <h2 className="formTitle">Demonstração Financeira</h2>

              <div className="inputsProductWrapper">
                <DefaultInput
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
                  label="Arquivo de Demonstração Financeira"
                  filename={fileName}
                  className="inputField"
                  name="url_pdf"
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

export default FormDemonstracoes;
