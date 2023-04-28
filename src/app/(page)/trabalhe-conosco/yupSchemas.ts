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
