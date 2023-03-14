import { useQuery } from 'react-query';
import UnidadesClass from '../index';
import { IGetUnit } from '../types';

export const useGetAllUnits = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllUnits'],
    async () => {
      return await UnidadesClass.getAllUnits();
    }
  );

  return {
    allUnits: data as IGetUnit[],
    isLoadingAllUnits: isLoading as boolean,
    isErrorAllUnits: isError as boolean,
    isSuccessAllUnits: isSuccess as boolean
  };
};
