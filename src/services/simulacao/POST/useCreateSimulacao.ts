import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import SimulacaoClass from '../index';
import { ISimulacaoPayload } from '../types';

export const useCreateSimulacao = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (simulacaoPayload: ISimulacaoPayload) => {
      let response: AxiosResponse = await SimulacaoClass.createSimulacao(
        simulacaoPayload
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('allSimulacao');
      }
    }
  );

  return { createSimulacao: mutateAsync };
};
