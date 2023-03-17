import { useQuery } from 'react-query';
import { IGetUnit } from '../types';
import UnidadesClass from '../index';

export const useGetUnitById = (id: number | string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['UnityById', id],
    async () => {
      return await UnidadesClass.getUnitById(id);
    }
  );

  return {
    unit: data as IGetUnit[],
    isLoadingAllUnits: isLoading as boolean,
    isErrorAllUnits: isError as boolean,
    isSuccessAllUnits: isSuccess as boolean
  };
};
