import * as yup from 'yup';

export const assembleiaSchema = yup?.object()?.shape({
  url_imagem: yup?.string()?.required('A capa é obrigatória!'),
  tipo: yup
    ?.string()
    .test(
      'should have a option selected',
      'O tipo é obrigatório',
      (values) => values !== ''
    )
    .required('O tipo é obrigatório!'),
  data_assembleia: yup?.date()?.required('A data é obrigatória!')
});
