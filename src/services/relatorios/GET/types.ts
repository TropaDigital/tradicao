import { IGetRelatorio } from '../types';

export interface IResponseRelatories {
  dataPaginada: IGetRelatorio[];
  total: number;
  paginas: number;
}
