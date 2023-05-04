// React
import React from 'react';

// Types
import { IForm } from '../types';
import { ISimulacaoPayload } from '@/services/simulacao/types';

// Bibliotecas
import { Form, Formik } from 'formik';

// Styles
import * as S from '../styles';

// Components
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import ButtonDefault from '../../ButtonDefault';

// Function
import { formatCurrency } from '@/utils/formatCurrency';

const FormSimulacao = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={
          {
            celular: actualItem?.celular,
            cpf: actualItem?.cpf,
            email: actualItem?.email,
            nome: actualItem?.nome,
            tipo_consorcio: actualItem?.tipo_consorcio,
            tipo_simulacao: actualItem?.tipo_simulacao,
            valor_bem: actualItem?.valor_bem
          } as ISimulacaoPayload
        }
        onSubmit={(_) => {}}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit} className="formAddProductWrapper">
            <h2 className="formTitle">Visualizar Simulação</h2>

            <div className="inputsProductWrapper">
              <div className="lineElementsWrapper">
                <InputDefault label="Nome" value={values?.nome} />
                <InputDefault label="CPF" value={values?.cpf} />
              </div>

              <div className="lineElementsWrapper">
                <InputDefault label="Celular" value={values?.celular} />
                <InputDefault label="Email" value={values?.email} />
              </div>

              <div className="lineElementsWrapper">
                <InputDefault
                  label="Tipo de Consórcio"
                  value={values?.tipo_consorcio}
                />
                <InputDefault
                  label="Tipo de Simulação"
                  value={values?.tipo_simulacao}
                />
                <InputDefault
                  label="Valor Simulado"
                  value={formatCurrency(parseInt(values?.valor_bem))}
                />
              </div>

              <div className="lineElementsWrapper buttonsWrapper">
                <ButtonDefault
                  color="darkButton"
                  type="button"
                  onClick={() => onSubmit()}
                  className="button"
                >
                  Voltar
                </ButtonDefault>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormSimulacao;
