// Components
import {
  IPartnerInitialValues,
  IPartnerPayload
} from '@/app/(page)/seja-um-parceiro/types';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { SelectDefault } from '../../inputs/SelectDefault';
import ButtonDefault from '../../ButtonDefault';

// Bibliotecas
import { Form, Formik } from 'formik';

// Styles
import * as S from '../styles';
import { IForm } from '../types';
import { useUpdateParceiro } from '@/services/seja-um-parceiro/PUT/useUpdateParceiro';
import { onlyNumbersMask } from '@/utils/masks';

const FormParceiros = ({ actualItem, modalOpen, onSubmit }: IForm) => {
  const allStates = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ];

  const { updateParceiro } = useUpdateParceiro();

  return (
    <S.Container>
      <Formik
        initialValues={actualItem as IPartnerInitialValues}
        onSubmit={(values) => {
          const partnerPayload: IPartnerPayload = {
            nome_da_empresa: values?.nome_da_empresa,
            cnpj: onlyNumbersMask(values?.cnpj),
            ramo_de_atividade: values?.ramo_de_atividade,
            nome_de_contato: values?.nome_de_contato,
            email_de_contato: values?.email_de_contato,
            telefone_de_contato: values?.telefone_de_contato,
            campo_aberto: values?.campo_aberto,
            endereco: {
              cep: onlyNumbersMask(values?.cep),
              logradouro: values?.logradouro,
              numero: values?.numero,
              complemento: values?.complemento,
              bairro: values?.bairro,
              cidade: values?.cidade,
              estado: values?.estado
            }
          };

          updateParceiro({
            id: actualItem?.id_parceiro,
            putBody: partnerPayload
          });
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

              <div className="inputsProductWrapper">
                <TextAreaDefault
                  label="Descrição da Empresa"
                  value={values?.campo_aberto}
                  onChange={handleChange}
                  error={touched?.campo_aberto && errors?.campo_aberto}
                />
              </div>

              <div className="lineElementsWrapper">
                <InputDefault
                  label="CEP"
                  onChange={handleChange}
                  value={values?.cep}
                  error={touched?.cep && errors?.cep}
                />

                <SelectDefault
                  label="Estado"
                  value={values?.estado}
                  onChange={handleChange}
                  error={touched?.estado && errors?.estado}
                >
                  {allStates?.map((estado) => (
                    <option value={estado?.uf}>{estado?.nome}</option>
                  ))}
                </SelectDefault>
              </div>

              <div className="lineElementsWrapper">
                <InputDefault
                  label="Cidade"
                  value={values?.cidade}
                  onChange={handleChange}
                  error={touched?.cidade && errors?.cidade}
                />

                <InputDefault
                  label="Bairro"
                  value={values?.bairro}
                  onChange={handleChange}
                  error={touched?.bairro && errors?.bairro}
                />
              </div>

              <div className="lineElementsWrapper">
                <InputDefault
                  label="Logradouro"
                  value={values?.logradouro}
                  onChange={handleChange}
                  error={touched?.logradouro && errors?.logradouro}
                />

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Número"
                    value={values?.numero}
                    onChange={handleChange}
                    error={touched?.numero && errors?.numero}
                  />

                  <InputDefault
                    label="Complemento"
                    value={values?.complemento}
                    onChange={handleChange}
                    error={touched?.complemento && errors?.complemento}
                  />
                </div>
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

export default FormParceiros;
