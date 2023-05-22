import { useQuery } from 'react-query';
import CountersClass from '../index';

export const useGetAllCounters = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allcounters'],
    async () => {
      return await CountersClass.getAllCounters();
    },
    {
      keepPreviousData: true
    }
  );

  return {
    getCounters: data as {
      result: any[];
    },
    isLoadingAllRecursos: isLoading as boolean,
    isErrorAllRecursos: isError as boolean,
    isSuccessAllRecursos: isSuccess as boolean
  };
};
