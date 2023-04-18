import * as yup from 'yup';

export const CurriculoSchema = yup.object().shape({
  nome: yup?.string().required('O nome é obrigatório.'),
  vaga: yup?.string().required('A vaga é obrigatória.'),
  curriculo_pdf: yup?.string().required('O currículo é obrigatório')
});
