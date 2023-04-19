import { useQuery } from 'react-query';
import RegulamentoClass from '../index';

export const useGetRegulamento = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['regulamento'],
    async () => {
      return await RegulamentoClass.getRegulamento();
    },
    {
      keepPreviousData: true
    }
  );

  return {
    regulamento: data as string,
    isLoadingAllRecursos: isLoading as boolean,
    isErrorAllRecursos: isError as boolean,
    isSuccessAllRecursos: isSuccess as boolean
  };
};
