import { IResponseContemplados } from '@/services/contemplados/GET/types';
import { IPagination } from '@/services/unidades/types';
import { useQuery } from 'react-query';
import AssembleiaClass from '../index';
import { IAssembleia, IContempladoAssembleia } from '../types';

export const useGetAllAssembleias = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allAssembleias', query],
    async () => {
      return await AssembleiaClass.getAllAssembleias(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    allAssembleias: data as {
      pagination: IPagination;
      result: IAssembleia[];
    },
    isLoadingAlContemplados: isLoading as boolean,
    isErrorAllContemplados: isError as boolean,
    isSuccessAllContemplados: isSuccess as boolean
  };
};
