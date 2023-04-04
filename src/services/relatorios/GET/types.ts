import { IPagination } from '@/services/unidades/types';
import { IGetRelatorio } from '../types';

export interface IResponseRelatories {
  result: IGetRelatorio[];
  pagination: IPagination;
}
