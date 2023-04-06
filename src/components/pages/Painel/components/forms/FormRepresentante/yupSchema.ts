import { validateCnpj } from '@/utils/validateCnpj';
import * as yup from 'yup';

export const RepresentanteSchema = yup?.object().shape({
  nome: yup?.string()?.required('O nome é obrigatório'),
  cnpj: yup
    ?.string()
    ?.test('Cnpj Length', 'CNPJ Inválido', (value) => {
      return validateCnpj(value);
    })
    .required('O CNPJ é obrigatório')
});
