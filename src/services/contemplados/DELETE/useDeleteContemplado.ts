import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ContempladosClass from '../index';

export const useDeleteContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: any = await ContempladosClass.deleteContemplado(id);

          return response;
        },
        {
          error: `Não foi possível deletar contemplado`,
          pending: 'Deletando contemplado',
          success: 'Contemplado deletado com sucesso'
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
        queryClient.invalidateQueries('AllContemplados');
      }
    }
  );

  return { deleteContemplado: mutateAsync };
};
