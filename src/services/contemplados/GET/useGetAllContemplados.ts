import { useQuery } from 'react-query';
import ContempladosClass from '../index';
import { IResponseContemplados } from './types';

export const useGetAllContemplados = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllContemplados', query],
    async () => {
      return await ContempladosClass.getAllContemplados(query);
    }
  );

  return {
    allContemplados: data as IResponseContemplados,
    isLoadingAlContemplados: isLoading as boolean,
    isErrorAllContemplados: isError as boolean,
    isSuccessAllContemplados: isSuccess as boolean
  };
};
