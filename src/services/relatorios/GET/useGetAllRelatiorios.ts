import { useQuery } from 'react-query';
import RelatioriosClass from '../index';
import { IGetRelatorio } from '../types';

export const useGetlAllRelatorios = (query: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllRelatories', query],
    async () => {
      return await RelatioriosClass.getAllRelatorios(query);
    }
  );

  return {
    allRelatories: data as {
      dataPaginada: IGetRelatorio[];
      total: number;
      paginas: number;
    },
    isLoadingAllDemonsrations: isLoading as boolean,
    isErrorAllDemonstrations: isError as boolean,
    isSuccessAllDemonstrations: isSuccess as boolean
  };
};
