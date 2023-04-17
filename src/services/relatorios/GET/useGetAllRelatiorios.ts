import { useQuery } from 'react-query';
import RelatioriosClass from '../index';
import { IResponseRelatories } from './types';

export const useGetlAllRelatorios = (query: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllRelatories', query],
    async () => {
      return await RelatioriosClass.getAllRelatorios(query);
    }
  );

  return {
    allRelatories: data as IResponseRelatories,
    isLoadingAllRelatories: isLoading as boolean,
    isErrorAllDRelatories: isError as boolean,
    isSuccessAllDRelatories: isSuccess as boolean
  };
};
