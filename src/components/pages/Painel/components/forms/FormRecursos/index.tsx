import { Form, Formik } from 'formik';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { IForm } from '../types';
import { InputWrapper } from './styles';

const FormRecursos = ({ onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();

  // const { createAssembleia } = useCreateAssembleia();

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

            // createAssembleia(formData);
          }

          onSubmit();
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Atualizar Recursos</h2>

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
                    Adicionar
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

export default FormRecursos;
