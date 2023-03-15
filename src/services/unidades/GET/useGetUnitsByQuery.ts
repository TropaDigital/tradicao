import { useQuery } from 'react-query';
import { IGetUnit } from '../types';
import UnidadesClass from '../index';

export const useGetUnitsByQuery = (query: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['UnitsByQuery', query],
    async () => {
      return await UnidadesClass.getUnitsByQuery(query);
    }
  );

  return {
    unitsByQuery: data as IGetUnit[],
    isLoadingAllUnitsByQuery: isLoading as boolean,
    isErrorAllUnitsByQuery: isError as boolean,
    isSuccessAllUnitsByQuery: isSuccess as boolean
  };
};
