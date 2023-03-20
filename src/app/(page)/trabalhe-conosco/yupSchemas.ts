import * as yup from 'yup';

const validateCnpj = (
  cnpj: string | undefined
):
  | boolean
  | void
  | yup.ValidationError
  | Promise<boolean | yup.ValidationError> => {
  const cnpjMultipliers: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const formattedCnpj: any = String(cnpj).replace(/[^\d]/g, '');

  if (formattedCnpj.length !== 14) return false;

  if (/0{14}/.test(formattedCnpj)) return false;

  for (var i = 0, n = 0; i < 12; n += formattedCnpj[i] * cnpjMultipliers[++i]);
  if (formattedCnpj[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  for (var i = 0, n = 0; i <= 12; n += formattedCnpj[i] * cnpjMultipliers[i++]);
  if (formattedCnpj[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  return true;
};

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
