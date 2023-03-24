import { useQuery } from 'react-query';
import RelatioriosClass from '../index';

export const useGetAllRepresentantes = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllRepresentantes'],
    async () => {
      return await RelatioriosClass.getAllCandidates();
    }
  );

  return {
    allRepresentantes: data as any[],
    isLoadingAllDemonsrations: isLoading as boolean,
    isErrorAllDemonstrations: isError as boolean,
    isSuccessAllDemonstrations: isSuccess as boolean
  };
};
