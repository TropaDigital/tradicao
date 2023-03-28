import * as yup from 'yup';

export const contempladoSchema = yup?.object()?.shape({
  images: yup
    ?.array()
    .of(yup.string())
    .min(1, 'O contemplado deve conter pelo menos 1 imagem.')
    .required(),
  nome: yup?.string().required('O nome é obrigatório'),
  depoimento: yup
    ?.string()
    .test(
      'min length',
      'O depoimento deve ter no máximo 280 caracteres.',
      (value) => {
        if (value && value?.length <= 280) return true;

        return false;
      }
    )
    .required('O depoimento é obrigatório'),
  status: yup?.string().required('')
});
