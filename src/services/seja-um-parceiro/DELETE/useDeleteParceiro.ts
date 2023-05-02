import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ParceiroClass from '../index';

export const useDeleteParceiro = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await ParceiroClass.deleteParceiro(id);
          return response;
        },
        {
          error: 'Falha ao excluir parceiro',
          pending: 'Excluindo parceiro',
          success: 'Parceiro excluído com sucesso'
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
        queryClient.invalidateQueries('allParceiros');
      }
    }
  );

  return { deleteParceiro: mutateAsync };
};
