import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracoesClass from '../index';

export const useDeleteDemonstracoes = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await DemonstracoesClass.deleteDemonstracao(id);
          return response;
        },
        {
          error: 'Não foi possível deletar demonstração',
          pending: 'Deletrando demonstração',
          success: 'Demonstração deletada com sucesso'
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
        queryClient.invalidateQueries('AllDemonstrations');
      }
    }
  );

  return { deleteDemonstracao: mutateAsync };
};
