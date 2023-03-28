import { useQuery } from 'react-query';
import { IGetUnit } from '../types';
import UnidadesClass from '../index';

export const useGetUnitsByQuery = (query: string, page = 1) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['UnitsByQuery', [query, page]],
    async () => {
      return await UnidadesClass.getUnits(query, page);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    units: data as IGetUnit[],
    isLoadingUnits: isLoading as boolean,
    isErrorUnits: isError as boolean,
    isSuccessUnits: isSuccess as boolean
  };
};
