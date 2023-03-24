import { useQuery } from 'react-query';
import RelatioriosClass from '../index';
import { IGetRelatorio } from '../types';

export const useGetlAllRelatorios = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllRelatories'],
    async () => {
      return await RelatioriosClass.getAllRelatorios();
    }
  );

  return {
    allRelatories: data as IGetRelatorio[],
    isLoadingAllDemonsrations: isLoading as boolean,
    isErrorAllDemonstrations: isError as boolean,
    isSuccessAllDemonstrations: isSuccess as boolean
  };
};
