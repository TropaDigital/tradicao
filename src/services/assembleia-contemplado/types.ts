export interface IAssembleiaContempladoBody {
  nome: string;
  grupo: number;
  cota: string;
  tipo_de_contemplacao: string;
  representante: number;
}

export interface IAssembleiaContempladoUpdate {
  id: number;
  contemplado: IAssembleiaContempladoBody;
}
