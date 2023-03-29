import { useQuery } from 'react-query';
import DemonstracoesClass from '../index';
import { IGetDemonstrations } from '../interface';

export const useGetAllDemonstrations = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllDemonstrations'],
    async () => {
      return await DemonstracoesClass.getAllDemonstrations();
    }
  );

  return {
    allDemonstrations: data as {
      dataPaginada: IGetDemonstrations[];
      total: number;
      paginas: number;
    },
    isLoadingAllDemonsrations: isLoading as boolean,
    isErrorAllDemonstrations: isError as boolean,
    isSuccessAllDemonstrations: isSuccess as boolean
  };
};
