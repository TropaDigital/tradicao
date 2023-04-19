import * as yup from 'yup';

export const PostagemSchema = yup?.object().shape({
  titulo: yup?.string()?.required('O título da Postagem é obrigatória'),
  subtitulo: yup?.string()?.required('O subtítulo da Postagem é obrigatória'),
  autor: yup?.string()?.required('O autor da Postagem é obrigatória'),
  local: yup?.string()?.required('O local da Postagem é obrigatória'),
  categoria_id: yup?.string()?.required('A categoria é obrigatória')
});
