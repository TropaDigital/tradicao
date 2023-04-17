import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RepresentanteClass from '../index';

export const useDeleteRepresentante = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await RepresentanteClass.deleteCandidate(id);
          return response;
        },
        {
          error: 'Falha ao excluir representante',
          pending: 'Excluindo representante',
          success: 'Representante excluído com sucesso'
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
        queryClient.invalidateQueries('AllRepresentantes');
      }
    }
  );

  return { deleteRepresentante: mutateAsync };
};
