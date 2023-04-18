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

const FormGrupos = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [planilhaPost, setPlanilhaPost] = useState<File>();

  const { createGrupo } = useCreateGrupo();
  const { updateGrupo } = useUpdateGrupo();

  return (
    <S.Container>
      <Formik
        initialValues={{
          planilha: {} as File,
          grupo: actualItem?.grupo ?? '',
          data_encerramento: actualItem?.primeiro_rateio ?? '',
          primeiro_rateio: actualItem?.primeiro_rateio ?? '',
          ultimo_rateio: actualItem?.ultimo_rateio ?? ''
        }}
        onSubmit={(values) => {
          if (planilhaPost) {
            const formData = new FormData();

            formData?.append('planilha', planilhaPost);

            createGrupo(formData);
          }

          if (!planilhaPost) {
            console.log(values?.primeiro_rateio);

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
        {({ handleSubmit, handleChange, values }) => (
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

                    <div className="lineElementsWrapper">
                      <InputDefault
                        label="1° Rateio"
                        value={moment(values?.primeiro_rateio).format(
                          'DD/MM/YYYY'
                        )}
                        onChange={handleChange}
                        name="primeiro_rateio"
                      />

                      <InputDefault
                        label="Último Rateio"
                        value={moment(values?.ultimo_rateio).format(
                          'DD/MM/YYYY'
                        )}
                        onChange={handleChange}
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
