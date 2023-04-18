import { IResponseContemplados } from '@/services/contemplados/GET/types';
import { useQuery } from 'react-query';
import AssembleiaClass from '../index';
import { IContempladoAssembleia } from '../types';

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
      pagination: any;
      result: any[];
    },
    isLoadingAlContemplados: isLoading as boolean,
    isErrorAllContemplados: isError as boolean,
    isSuccessAllContemplados: isSuccess as boolean
  };
};
