import * as yup from 'yup';

export const RepresentanteSchema = yup?.object().shape({
  nome: yup?.string()?.required(),
  cnpj: yup
    ?.string()
    ?.test('Cnpj Length', 'O CNPJ deve conter 14 dígitos', (values) => {
      return values?.length === 14;
    })
    .required()
});
