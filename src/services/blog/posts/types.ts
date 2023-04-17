export interface IGetPosts {
  postagem_id: number;
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
