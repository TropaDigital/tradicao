import { IPagination } from '@/services/unidades/types';
import { IGetRelatorio } from '../types';

export interface IResponseRelatories {
  dataPaginada: IGetRelatorio[];
  total: number;
  limit: number;
}
