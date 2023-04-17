import * as yup from 'yup';

export const PostagemSchema = yup?.object().shape({
  postagem_img: yup?.string()?.required('A capa da Postagem é obrigatória'),
  titulo: yup?.string()?.required('O título da Postagem é obrigatória'),
  subtitulo: yup?.string()?.required('O subtítulo da Postagem é obrigatória'),
  autor: yup?.string()?.required('O autor da Postagem é obrigatória'),
  local: yup?.string()?.required('O local da Postagem é obrigatória'),
  categoria: yup?.string()?.required('A categoria da Postagem é obrigatória')
});
