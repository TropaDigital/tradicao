import { validateCnpj } from '@/utils/validateCnpj';
import * as yup from 'yup';

const initialInformationValidation: any = {
  nome_da_empresa: yup.string().required('O nome da empresa é obrigatório!'),
  cnpj: yup
    .string()
    .test('should be a valid cnpj', 'CNPJ Inválido', (value) =>
      validateCnpj(value)
    )
    .required('O CNPJ é obrigatório!'),
  ramo_de_atividade: yup.string().required('O ramo de atividade é obrigatório!')
};

const addressValidation: any = {
  cep: yup.string().required('O CEP é obrigatório!'),
  logradouro: yup.string().required('O logradouro é obrigatório!'),
  numero: yup.string().required('O número é obrigatório!'),
  complemento: yup.string().optional(),
  bairro: yup.string().required('O bairro é obrigatório!'),
  cidade: yup.string().required('A cidade é obrigatória!'),
  estado: yup.string().required('O estado é obrigatório')
};

const contactValidation: any = {
  nome_de_contato: yup.string().required('O nome de contato é obrigatório!'),
  email_de_contato: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail de contato é obrigatório!'),
  telefone_de_contato: yup
    .string()
    .required('O telefone de contato é obrigatório!')
};

const aboutValidation: any = {
  campo_aberto: yup.string().required('O campo aberto é obrigatório!')
};

export const parceiroFormSchema = yup.object().shape({
  ...initialInformationValidation,
  ...addressValidation,
  ...contactValidation,
  ...aboutValidation
});
