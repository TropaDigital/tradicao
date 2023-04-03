import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { RepresentanteSchema } from './yupSchema';
import DefaultInput from '@/components/UI/DefaultInput';
import { IForm } from '../types';

const FormRepresentante = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.nome ?? '',
          cnpj: actualItem?.cnpj ?? [],
          contato: actualItem?.contato ?? ''
        }}
        validationSchema={RepresentanteSchema}
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
              <h2 className="formTitle">Representante</h2>

              <div className="inputsProductWrapper">
                <DefaultInput
                  label="Nome"
                  placeholder="Nome do Representante"
                  name="nome"
                  value={values?.nome}
                  onChange={handleChange}
                  error={touched?.nome && errors?.nome}
                />

                <DefaultInput
                  label="CNPJ"
                  placeholder="CNPJ do Representante"
                  name="cnpj"
                  value={values?.cnpj}
                  onChange={handleChange}
                  error={touched?.cnpj && errors?.cnpj}
                />

                <DefaultInput
                  label="Contato"
                  placeholder="Contato do Representante"
                  name="contato"
                  value={values?.contato}
                  onChange={handleChange}
                  error={touched?.contato && errors?.contato}
                />

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

export default FormRepresentante;
