export interface IGetPosts {
  id_postagem: number;
  titulo: string;
  conteudo: string;
  data: string;
  acesso_total: number;
  acesso_mes: number;
  criado: string;
  modificado: string;
  postagem_img: string;
  local: string;
  slug: string;
  autor: string;
  subtitulo: string;
  categoria_id: number;
  categoria: string;
}

export interface IUpdatePostBody {
  postagem_img: string;
  titulo: string;
  subtitulo: string;
  autor: string;
  local: string;
  categoria_id: number | string;
  conteudo: string;
  slug: string;
  id_postagem: number;
}

export interface IPostInfo {
  id_postagem: number;
  slug: string;
  titulo: string;
}

export interface IPostList {
  id_postagem: number;
  titulo: string;
  subtitulo: string;
  postagem_img: string;
  slug: string;
  data: string;
}
