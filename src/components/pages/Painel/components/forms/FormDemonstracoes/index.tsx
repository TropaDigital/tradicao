import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { contempladoSchema } from '../yupSchema';
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

const FormDemonstracoes = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={{
          titulo: '',
          url_pdf: '',
          status: 'Ativo'
        }}
        onSubmit={(values) => {
          console.log(values);
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
                  onPostFile={(file) => setFieldValue('url_pdf', file)}
                  label="Arquivo de Demonstração Financeira"
                  filename="Adoleta"
                  className="inputField"
                  name="url_pdf"
                />

                <SelectDefault label="Status" name="status">
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
