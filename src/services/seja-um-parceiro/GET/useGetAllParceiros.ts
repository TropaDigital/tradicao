import { useQuery } from 'react-query';
import ParceirosClass from '../index';

export const useGetAllParceiros = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allParceiros', query],
    async () => {
      return await ParceirosClass.getParceiro(query);
    }
  );

  return {
    allParceiros: data as any,
    isLoading,
    isError,
    isSuccess
  };
};
