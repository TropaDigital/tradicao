import { useQuery } from 'react-query';
import RelatioriosClass from '../index';

export const useGetAllRepresentantes = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllCandidates'],
    async () => {
      return await RelatioriosClass.getAllCandidates();
    }
  );

  return {
    allRepresentantes: data as any[],
    isLoadingAllCandidates: isLoading as boolean,
    isErrorAllDCandidates: isError as boolean,
    isSuccessAllDCandidates: isSuccess as boolean
  };
};
