import * as yup from 'yup';

export const demonstracaoSchema = yup?.object()?.shape({
  titulo: yup?.string().required('O título é obrigatório'),
  url_pdf: yup
    .array()
    .of(yup.string())
    .required('O Pdf de Demonstração é obrigatório')
});
