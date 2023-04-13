import * as yup from 'yup';

export const PostagemSchema = yup?.object().shape({
  postagem_img: yup?.string()?.required('A capa da Postagem é obrigatória'),
  titulo: yup?.string()?.required('A capa da Postagem é obrigatória'),
  subtitulo: yup?.string()?.required('A capa da Postagem é obrigatória'),
  autor: yup?.string()?.required('A capa da Postagem é obrigatória'),
  local: yup?.string()?.required('A capa da Postagem é obrigatória'),
  categoria: yup?.string()?.required('A capa da Postagem é obrigatória')
});
