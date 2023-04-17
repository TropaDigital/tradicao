import { IGetContemplados } from '../types';

export interface IResponseContemplados {
  dataPaginada: IGetContemplados[];
  paginas: number;
  total: number;
}
