import { IGetDemonstrations } from '../interface';

export interface IResponseDemonstrations {
  dataPaginada: IGetDemonstrations[];
  total: number;
  paginas: number;
}
