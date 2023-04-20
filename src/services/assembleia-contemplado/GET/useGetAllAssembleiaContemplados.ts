import { useQuery } from 'react-query';
import AssembleiaContempladosClass from '../index';

export const useGetAllAssembleiaContemplados = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllAssembleiaContemplados', query],
    async () => {
      return await AssembleiaContempladosClass.getAllAssembleiaContemplado(
        query
      );
    }
  );

  return {
    allContemplados: data as any,
    isLoadingAlContemplados: isLoading as boolean,
    isErrorAllContemplados: isError as boolean,
    isSuccessAllContemplados: isSuccess as boolean
  };
};
