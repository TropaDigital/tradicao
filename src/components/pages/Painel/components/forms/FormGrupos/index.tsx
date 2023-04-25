import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useCreateGrupo } from '@/services/grupos-encerrados/POST/useCreateGrupo';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { IForm } from '../types';
import { InputWrapper } from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useUpdateGrupo } from '@/services/grupos-encerrados/PUT/useUpdateGrupo';
import { formatDate, formatISOToDate, toISODate } from '@/utils/masks';

const FormGrupos = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();
  const [planilhaError, setPLanilhaError] = useState<string>();

  const { createGrupo } = useCreateGrupo();
  const { updateGrupo } = useUpdateGrupo();

  function validatePlanilhaField() {
    if (!planilhaPost) return true;

    return false;
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          planilha: {} as File,
          grupo: actualItem?.grupo ?? '',
          data_encerramento:
            formatDate(actualItem?.primeiro_rateio?.split('T')[0]) ?? '',
          primeiro_rateio:
            formatDate(actualItem?.primeiro_rateio?.split('T')[0]) ?? '',
          ultimo_rateio:
            formatDate(actualItem?.ultimo_rateio?.split('T')[0]) ?? ''
        }}
        onSubmit={(values) => {
          if (validatePlanilhaField()) {
            setPLanilhaError('A planilha é obrigatória!');
            return;
          }

          if (planilhaPost) {
            const formData = new FormData();

            formData?.append('planilha', planilhaPost);

            createGrupo(formData);
          }

          if (!planilhaPost) {
            updateGrupo({
              putBody: {
                grupo: values?.grupo,
                data_encerramento: values?.data_encerramento,
                primeiro_rateio: values?.primeiro_rateio,
                ultimo_rateio: values?.ultimo_rateio
              },
              id: actualItem?.id_grupo
            });
          }

          setPlanilhaPost(undefined);
          onSubmit();
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              {modalOpen === 'publicar' && (
                <>
                  <h2 className="formTitle">Atualizar Grupos Encerrados</h2>

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
                        Atualizar
                      </ButtonDefault>
                    </div>
                  </div>
                </>
              )}

              {modalOpen === 'editar' && (
                <>
                  <h2 className="formTitle">Atualizar Grupo Encerrado</h2>

                  <div className="inputsProductWrapper">
                    <InputDefault
                      label="Grupo"
                      value={values?.grupo}
                      onChange={handleChange}
                      name="grupo"
                    />

                    <InputDefault
                      label="Data encerramento"
                      value={values?.data_encerramento?.replace(
                        /(\d{2})(\d{2})(\d{4})/,
                        '$1/$2/$3'
                      )}
                      maxLength={10}
                      minLength={10}
                      onChange={handleChange}
                      name="data_encerramento"
                    />

                    <div className="lineElementsWrapper">
                      <InputDefault
                        label="1° Rateio"
                        value={values?.primeiro_rateio?.replace(
                          /(\d{2})(\d{2})(\d{4})/,
                          '$1/$2/$3'
                        )}
                        maxLength={10}
                        minLength={10}
                        onChange={handleChange}
                        name="primeiro_rateio"
                      />

                      <InputDefault
                        label="Último Rateio"
                        value={values?.ultimo_rateio?.replace(
                          /(\d{2})(\d{2})(\d{4})/,
                          '$1/$2/$3'
                        )}
                        onChange={handleChange}
                        maxLength={10}
                        minLength={10}
                        name="ultimo_rateio"
                      />
                    </div>

                    <div
                      className="lineElementsWrapper buttonsWrapper"
                      onChange={handleChange}
                    >
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
                        Atualizar
                      </ButtonDefault>
                    </div>
                  </div>
                </>
              )}
            </Form>
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormGrupos;
