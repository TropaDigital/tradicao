import { IGetRepresentante } from '../types';

export interface IResponseRepresentante {
  total: number;
  paginas: number;
  dataPaginada: IGetRepresentante[];
}
