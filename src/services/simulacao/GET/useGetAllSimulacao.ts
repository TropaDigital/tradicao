import { useQuery } from 'react-query';
import SimulacaoClass from '../index';

export const useGetAllSimulacao = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allSimulacao', query],
    async () => {
      return await SimulacaoClass.getAllSimulacao(query);
    }
  );

  return {
    allSimulacao: data as any,
    isLoading,
    isError,
    isSuccess
  };
};
