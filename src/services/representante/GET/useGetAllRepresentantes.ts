import { useQuery } from 'react-query';
import RepresentanteClass from '../index';
import { IResponseRepresentante } from './types';

export const useGetAllRepresentantes = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllRepresentantes', query],
    async () => {
      return await RepresentanteClass.getAllCandidates(query);
    }
  );

  return {
    allRepresentantes: data as IResponseRepresentante,
    isLoadingAllCandidates: isLoading as boolean,
    isErrorAllDCandidates: isError as boolean,
    isSuccessAllDCandidates: isSuccess as boolean
  };
};
