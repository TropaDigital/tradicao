import { TrashIcon } from '@/assets/icons';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import UploadFile from '@/components/UI/UploadFile';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useCreateAssembleia } from '@/services/assembleia/POST/useCreateAssembleia';
import { useCreateContemplado } from '@/services/contemplados/POST/useCreateContemplado';
import { useUpdateContemplado } from '@/services/contemplados/PUT/useUpdateContemplado';
import { IContempladoImages } from '@/services/contemplados/types';
import { onlyLetterMask } from '@/utils/masks';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import * as S from '../styles';
import { IForm } from '../types';
import { InputWrapper } from './styles';
import { contempladoSchema } from './yupSchema';

const FormAssembleia = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();

  const { createAssembleia } = useCreateAssembleia();

  return (
    <S.Container>
      <Formik
        initialValues={{
          planilha: {} as File,
          tipo: ''
        }}
        onSubmit={async (values) => {
          if (planilhaPost) {
            const formData = new FormData();

            formData?.append('planilha', planilhaPost);
            formData?.append('tipo', values?.tipo);

            createAssembleia(formData);
          }

          onSubmit();
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Criar Assembleia</h2>

              <div className="inputsProductWrapper">
                <InputWrapper>
                  <label>
                    <input
                      type="file"
                      placeholder="Selecione o arquivo"
                      onChange={(e) => {
                        if (e?.target?.files) {
                          setPlanilhaPost(e?.target?.files[0]);
                        }
                      }}
                    />
                    <p>{planilhaPost?.name ?? 'Selecione uma planilha'}</p>
                    <button>Buscar</button>
                  </label>
                </InputWrapper>

                <SelectDefault
                  label="Tipo de Assembleia"
                  name="tipo"
                  onChange={handleChange}
                >
                  <option>Selecione o tipo de Assembleia</option>
                  <option value="contempaldos">Contemplados</option>
                  <option value="excluidos">Excluídos</option>
                  <option value="suplencia">Suplência</option>
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
