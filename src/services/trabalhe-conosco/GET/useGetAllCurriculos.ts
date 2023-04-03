import { useQuery } from 'react-query';
import TrabalheConoscoClass from '../index';

export const useGetAllCandidates = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllCandidates'],
    async () => {
      return await TrabalheConoscoClass.getAllCandidate();
    }
  );

  return {
    allCandidates: data as {
      dataPaginada: any[];
      total: number;
      paginas: number;
    },
    isLoadingAllCandidates: isLoading as boolean,
    isErrorAllCandidates: isError as boolean,
    isSuccessAllCandidates: isSuccess as boolean
  };
};
