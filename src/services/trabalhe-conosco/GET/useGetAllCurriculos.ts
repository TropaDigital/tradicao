import { IPagination } from '@/services/unidades/types';
import { useQuery } from 'react-query';
import TrabalheConoscoClass from '../index';

export const useGetAllCandidates = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllCandidates', query],
    async () => {
      return await TrabalheConoscoClass.getAllCandidate(query);
    }
  );

  return {
    allCandidates: data as {
      result: any[];
      pagination: IPagination;
    },
    isLoadingAllCandidates: isLoading as boolean,
    isErrorAllCandidates: isError as boolean,
    isSuccessAllCandidates: isSuccess as boolean
  };
};
