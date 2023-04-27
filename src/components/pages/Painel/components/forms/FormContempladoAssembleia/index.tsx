import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useCreateAssembleiaContemplado } from '@/services/assembleia-contemplado/POST/useCreateAssembleiaContemplado';
import { useUpdateAssembleiaContemplado } from '@/services/assembleia-contemplado/PUT/useUpdateAssembleiaContemplado';
import { useCreateAssembleia } from '@/services/assembleia/POST/useCreateAssembleia';
import { onlyLetterMask } from '@/utils/masks';
import { Form, Formik } from 'formik';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { IForm } from '../types';
import { AssembleiaContempladoSchema } from './yupSchema';
import { useEffect, useState } from 'react';

const FormContempladoAssembleia = ({
  modalOpen,
  actualItem,
  onSubmit
}: IForm) => {
  const [currentAssembleia, setCurrentAssembleia] = useState<string>('');

  const { updateContemplado } = useUpdateAssembleiaContemplado();
  const { createContemplado } = useCreateAssembleiaContemplado();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAssembleia = localStorage?.getItem('id_assembleia');

      currentAssembleia && setCurrentAssembleia(currentAssembleia);
    }
  }, []);

  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.nome ?? '',
          grupo: actualItem?.grupo ?? '',
          cota: actualItem?.cota ?? '',
          tipo_de_contemplacao: actualItem?.tipo_de_contemplacao ?? '',
          representante: actualItem?.representante ?? ''
        }}
        validationSchema={AssembleiaContempladoSchema}
        onSubmit={(values) => {
          if (modalOpen === 'editar') {
            updateContemplado({
              id: actualItem?.contemplado_assembleia_id,
              contemplado: values
            });
          }

          if (modalOpen === 'publicar') {
            createContemplado(values);
          }

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
              <h2 className="formTitle">Contemplado</h2>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Nome"
                  placeholder="Mário C."
                  name="nome"
                  value={values?.nome}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('nome', onlyLetterMask(e?.target?.value));
                  }}
                  error={touched?.nome && errors?.nome}
                />

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Grupo"
                    placeholder="1257"
                    name="grupo"
                    value={values?.grupo}
                    onChange={handleChange}
                    error={touched?.grupo && errors?.grupo}
                  />

                  <InputDefault
                    label="Cota"
                    placeholder="932"
                    name="cota"
                    value={values?.cota}
                    onChange={handleChange}
                    error={touched?.cota && errors?.cota}
                  />
                </div>

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Tipo de Contemplação"
                    placeholder="Sorteio"
                    name="tipo_de_contemplacao"
                    value={values?.tipo_de_contemplacao}
                    onChange={handleChange}
                    error={
                      touched?.tipo_de_contemplacao &&
                      errors?.tipo_de_contemplacao
                    }
                  />

                  <InputDefault
                    label="Representante"
                    placeholder="0001"
                    name="representante"
                    value={values?.representante}
                    onChange={handleChange}
                    error={touched?.representante && errors?.representante}
                  />
                </div>

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
                    {modalOpen === 'publicar' ? 'Cadastrar' : 'Atualizar'}
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

export default FormContempladoAssembleia;
