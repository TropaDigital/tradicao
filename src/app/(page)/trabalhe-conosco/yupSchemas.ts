import { validateCnpj } from '@/utils/validateCnpj';
import * as yup from 'yup';

export const curriulumFormSchema = yup.object().shape({
  fullName: yup.string().required('O nome é obrigatório!'),
  role: yup.string().required('A vaga de interesse é obrigatória!'),
  curriculum: yup.array().min(1, 'O currículo é obrigatório').required()
});

export const representanteFormSchema = yup.object().shape({
  fullName: yup.string().required('O nome é obrigatório!'),
  cnpj: yup
    .string()
    .test('validate', 'CNPJ Inválido', (value) => validateCnpj(value))
    .required('O CNPJ é obrigatório!'),
  contact: yup.string().required('O contato é obrigatório')
});

export const parceiroFormSchema = yup.object().shape({
  nome_da_empresa: yup.string().required('O nome da empresa é obrigatório!'),
  cnpj: yup.string().required('O CNPJ é obrigatório!'),
  ramo_de_atividade: yup
    .string()
    .required('O ramo de atividade é obrigatório!'),
  endereco: yup.string().required('O endereço é obrigatório!'),
  nome_de_contato: yup.string().required('O nome de contato é obrigatório!'),
  email_de_contato: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail de contato é obrigatório!'),
  telefone_de_contato: yup
    .string()
    .required('O telefone de contato é obrigatório!'),
  clientes_ativos: yup
    .string()
    .required('O número de clientes ativos é obrigatório!'),
  campo_aberto: yup.string().required('O campo aberto é obrigatório!')
});
