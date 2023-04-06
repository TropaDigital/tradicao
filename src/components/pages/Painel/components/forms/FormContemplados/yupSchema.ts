import * as yup from 'yup';

export const contempladoSchema = yup?.object()?.shape({
  images: yup?.array().of(yup.string()),
  nome: yup?.string().required('O nome é obrigatório'),
  depoimento: yup?.string(),
  categoria: yup
    ?.string()
    ?.test('must be a consortium', 'O Consórcio é obrigatório', (value) => {
      return value !== '';
    })
    ?.required('O Consórcio é obrigatório'),
  status: yup?.string().required('O Status é obrigatório')
});
