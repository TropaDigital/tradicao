export interface IUpdatePostBody {
  postagem_img: string;
  titulo: string;
  subtitulo: string;
  autor: string;
  local: string;
  categoria_id: number | string;
  conteudo: string;
}

export interface IUpdatePostObject {
  postagem: IUpdatePostBody;
  id: number;
}
