import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { RepresentanteSchema } from './yupSchema';
import { IForm } from '../types';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { cnpjMask, onlyLetterMask } from '@/utils/masks';

const FormRepresentante = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.nome ?? '',
          cnpj: actualItem?.cnpj ?? '',
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
                <InputDefault
                  label="Nome"
                  placeholder="Nome do Representante"
                  name="nome"
                  value={values?.nome}
                  onChange={(e) => {
                    setFieldValue('nome', onlyLetterMask(e?.target?.value));
                  }}
                  error={touched?.nome && errors?.nome}
                />

                <InputDefault
                  label="CNPJ"
                  placeholder="CNPJ do Representante"
                  name="cnpj"
                  value={values?.cnpj}
                  mask="cnpj"
                  onChange={(e) => {
                    setFieldValue('cnpj', cnpjMask(e?.currentTarget?.value));
                  }}
                  maxLength={14}
                  error={touched?.cnpj && errors?.cnpj}
                />

                <InputDefault
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
