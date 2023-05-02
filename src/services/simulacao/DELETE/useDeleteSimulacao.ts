import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import SimulacaoClass from '../index';

export const useDeleteSimulacao = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await SimulacaoClass.deleteSimulacao(
            id
          );
          return response;
        },
        {
          error: 'Erro ao exluir simulação',
          pending: 'Excluíndo simulação',
          success: 'Simulação excluída com sucesso'
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

  return { deleteSimulacao: mutateAsync };
};
