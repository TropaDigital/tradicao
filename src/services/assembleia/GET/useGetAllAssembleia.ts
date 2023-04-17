import { useQuery } from 'react-query';
import AssembleiaClass from '../index';

export const useGetAllAssembleias = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allAssembleias', query],
    async () => {
      return await AssembleiaClass.getAllAssembleias(query);
    }
  );

  return {
    allAssembleias: data as any,
    isLoadingAlContemplados: isLoading as boolean,
    isErrorAllContemplados: isError as boolean,
    isSuccessAllContemplados: isSuccess as boolean
  };
};
