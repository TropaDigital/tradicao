import { useQuery } from 'react-query';
import ContempladosClass from '../index';
import { IGetContemplados } from '../types';

export const useGetAllContemplados = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllContemplados', query],
    async () => {
      return await ContempladosClass.getAllContemplados(query);
    }
  );

  return {
    allContemplados: data as {
      dataPaginada: IGetContemplados[];
      paginas: number;
      total: number;
    },
    isLoadingAllDemonsrations: isLoading as boolean,
    isErrorAllDemonstrations: isError as boolean,
    isSuccessAllDemonstrations: isSuccess as boolean
  };
};
