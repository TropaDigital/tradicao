import { Form, Formik } from 'formik';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { IForm } from '../types';
import { InputWrapper } from './styles';
import { useCreateRecursos } from '@/services/recursos/POST/useCreateRecursos';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';

const FormRecursos = ({ onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();
  const [planilhaError, setPLanilhaError] = useState<string>();
  const [planilhaUrl, setPlanilhaUrl] = useState<string>();

  const { createRecursos } = useCreateRecursos();
  const { postFile } = usePostFile();

  function validatePlanilhaField() {
    if (!planilhaPost) return true;

    return false;
  }

  async function handlePlanilhaChange(e: any) {
    if (e?.target?.files) {
      setPlanilhaPost(e?.target?.files[0]);

      const planilhaUrl = await postFile(e?.target?.files[0]);

      setPlanilhaUrl(planilhaUrl);
    }
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          planilha: {} as File,
          tipo: ''
        }}
        onSubmit={async (values) => {
          if (validatePlanilhaField()) {
            setPLanilhaError('A planilha é obrigatória!');
            return;
          }

          if (planilhaPost) {
            createRecursos(planilhaUrl as string);
          }

          onSubmit();
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Atualizar Recursos</h2>

              <div className="inputsProductWrapper">
                <InputWrapper>
                  <label>
                    <input
                      type="file"
                      placeholder="Selecione o arquivo"
                      onChange={handlePlanilhaChange}
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
