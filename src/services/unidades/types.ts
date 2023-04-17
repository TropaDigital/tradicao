export interface IResponseUnits {
  pagination: IPagination;
  result: IGetUnit[];
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
  telefone: string;
  latitude?: string;
  longitutde?: string;
}

export interface IPagination {
  total: number;
  lastPage: number;
  perPage: number;
  currentPage: number;
  from: number;
  to: number;
}
