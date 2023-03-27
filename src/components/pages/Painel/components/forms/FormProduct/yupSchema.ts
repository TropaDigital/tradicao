import * as yup from 'yup';

export const contempladoSchema = yup?.object()?.shape({
  images: yup
    ?.array()
    .of(yup.string())
    .min(1, 'O contemplado deve conter pelo menos 1 imagem.')
    .required(),
  nome: yup?.string().required('O nome é obrigatório'),
  depoimento: yup?.string().required('O depoimento é obrigatório'),
  status: yup?.string().required('')
});
