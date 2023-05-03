import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import SimulacaoClass from '../index';
import { ISimulacaoPayload } from '../types';

export const useUpdateSimulacao = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (simulacaoPutBody: IUpdateBody) => {
      let response: AxiosResponse = await SimulacaoClass.updateSimulacao(
        simulacaoPutBody?.id,
        simulacaoPutBody?.putBody as ISimulacaoPayload
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('allSimulacao');
      }
    }
  );
  return { updateSimulacao: mutateAsync };
};
