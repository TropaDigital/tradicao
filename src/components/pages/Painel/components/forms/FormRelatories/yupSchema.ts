import * as yup from 'yup';

export const relatoriesSchema = yup?.object()?.shape({
  titulo: yup?.string().required('O título é obrigatório'),
  url_pdf: yup
    ?.string()
    .test('has Pdf', 'O relatório é obrigatório', (value) => {
      return value?.includes('https://');
    })
});
