import { IResponseContemplados } from '@/services/contemplados/GET/types';
import { useQuery } from 'react-query';
import GruposEncerradosClass from '../index';

export const useGetAllGrupos = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allGrupos', query],
    async () => {
      return await GruposEncerradosClass.getAllGrupos(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    allGrupos: data as {
      pagination: any;
      result: any[];
    },
    isLoadingAlGrupos: isLoading as boolean,
    isErrorAllGrupos: isError as boolean,
    isSuccessAllGrupos: isSuccess as boolean
  };
};
