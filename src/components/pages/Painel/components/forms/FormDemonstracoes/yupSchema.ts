import * as yup from 'yup';

export const demonstracaoSchema = yup?.object()?.shape({
  titulo: yup?.string().required('O título é obrigatório'),
  url_pdf: yup
    ?.string()
    .test('has Pdf', 'A demonstração é obrigatória', (value) => {
      return value?.includes('https://');
    })
});
