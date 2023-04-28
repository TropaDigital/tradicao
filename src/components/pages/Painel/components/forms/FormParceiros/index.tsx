// Components
import { IPartnerInitialValues } from '@/app/(page)/seja-um-parceiro/types';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { useGetAllParceiros } from '@/services/seja-um-parceiro/GET/useGetAllParceiros';

// Bibliotecas
import { Form, Formik } from 'formik';

// Styles
import * as S from '../styles';
import { IForm } from '../types';

const FormParceiros = ({ actualItem, modalOpen, onSubmit }: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={actualItem as IPartnerInitialValues}
        onSubmit={(values: any) => {
          console.log(values);
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
          <Form onSubmit={handleSubmit} className="formAddProductWrapper">
            <h2 className="formTitle">Atualizar Parceiro</h2>

            <div className="inputsProductWrapper">
              <div className="lineElementsWrapper">
                <InputDefault
                  label="Nome da Empresa"
                  value={values?.nome_da_empresa}
                  name="nome_da_empresa"
                  onChange={handleChange}
                  error={touched?.nome_da_empresa && errors?.nome_da_empresa}
                />
              </div>

              <div className="lineElementsWrapper">
                <InputDefault
                  label="CNPJ"
                  value={values?.cnpj}
                  name="cnpj"
                  onChange={handleChange}
                  error={touched?.cnpj && errors?.cnpj}
                />
                <InputDefault
                  label="Ramo de Atividade"
                  value={values?.ramo_de_atividade}
                  onChange={handleChange}
                  error={
                    touched?.ramo_de_atividade && errors?.ramo_de_atividade
                  }
                />
              </div>

              <InputDefault
                label="Nome de Contato"
                value={values?.nome_de_contato}
                onChange={handleChange}
                error={touched?.nome_de_contato && errors?.nome_de_contato}
              />

              <div className="lineElementsWrapper">
                <InputDefault
                  label="Email de Contato"
                  value={values?.email_de_contato}
                  onChange={handleChange}
                  error={touched?.email_de_contato && errors?.email_de_contato}
                />
                <InputDefault
                  label="Telefone de Contato"
                  value={values?.telefone_de_contato}
                  onChange={handleChange}
                  error={
                    touched?.telefone_de_contato && errors?.telefone_de_contato
                  }
                />
              </div>

              <TextAreaDefault
                label="Descrição da Empresa"
                value={values?.campo_aberto}
                onChange={handleChange}
                error={touched?.campo_aberto && errors?.campo_aberto}
              />
            </div>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormParceiros;
