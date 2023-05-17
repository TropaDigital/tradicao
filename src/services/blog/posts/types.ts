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
  local: string | null;
  autor: string | null;
  subtitulo: string;
  categoria_id: number;
  categoria: string;
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
