import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import SimulacaoClass from '../index';
import { ISimulacaoPayload } from '../types';

export const useUpdateSimulacao = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (simulacaoPutBody: IUpdateBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await SimulacaoClass.updateSimulacao(
            simulacaoPutBody?.id,
            simulacaoPutBody?.putBody as ISimulacaoPayload
          );
          return response;
        },
        {
          error: `Não foi possível atualizar simulação`,
          pending: 'Atualizando simulação',
          success: 'Simulação atualizada com sucesso'
        },
        {
          position: 'top-right',
          autoClose: 3000
        }
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
