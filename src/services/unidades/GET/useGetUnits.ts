import { useQuery } from 'react-query';
import { IResponseUnits } from '../types';
import UnidadesClass from '../index';

export const useGetUnitsByQuery = (query: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['UnitsByQuery', [query]],
    async () => {
      return await UnidadesClass.getUnits(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    units: data as IResponseUnits,
    isLoadingUnits: isLoading as boolean,
    isErrorUnits: isError as boolean,
    isSuccessUnits: isSuccess as boolean
  };
};
