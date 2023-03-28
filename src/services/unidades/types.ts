export interface IResponseUnits {
  total: number;
  paginas: number;
  dataPaginada: IGetUnit[];
}

export interface IGetUnit {
  bairro: string;
  cep: string;
  cidade: string;
  criado: string;
  email_contato: string;
  endereco: string;
  excluido: unknown;
  id: number;
  latitude: string;
  longitude: string;
  matricula: string;
  modificado: string;
  telefone: string;
  titulo: string;
  uf: string;
}

export interface IUnitBody {
  titulo: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  latitude?: string;
  longitutde?: string;
}
