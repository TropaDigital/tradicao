export interface IGetContemplados {
  contempladoImagens: IContempladoImages[];
  criado: string;
  depoimento: string;
  excluido: null | string;
  id_contemplado: number;
  modificado: string;
  nome: string;
  status: 'Ativo' | 'Inativo';
}

export interface IContempladoImages {
  criado: string;
  excluido: null | string;
  id_contemplado: number;
  id_contemplado_foto: number;
  moficiado: string;
  url_foto: string;
}

export interface IContempladoBody {
  nome: string;
  depoimento: string;
  url_foto: string[];
  status: 'Ativo' | 'Inativo';
}
