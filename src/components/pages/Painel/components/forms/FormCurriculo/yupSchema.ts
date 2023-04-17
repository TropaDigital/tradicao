import * as yup from 'yup';

export const CurriculoSchema = yup.object().shape({
  nome: yup?.string().required('O nome é obrigatório.'),
  cargo: yup?.string().required('O Cargo é obrigatório.'),
  curriculo_pdf: yup?.string().required('O currículo é obrigatório')
});
