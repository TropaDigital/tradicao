import * as yup from 'yup';

export const CurriculoSchema = yup.object().shape({
  nome: yup?.string().required(),
  cargo: yup?.string().required(),
  curriculo_pdf: yup?.string()
});
