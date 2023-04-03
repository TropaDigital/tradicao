import * as yup from 'yup';

export const relatoriesSchema = yup?.object()?.shape({
  titulo: yup?.string().required('O título é obrigatório'),
  url_pdf: yup
    .array()
    .of(yup.string())
    .required('O Pdf de Relatório é obrigatório')
});
