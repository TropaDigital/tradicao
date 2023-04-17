import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TrabalheConoscoClass from '../index';

export const useDeleteCurriculo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await TrabalheConoscoClass.deleteCandidate(id);
          return response;
        },
        {
          error: 'Falha ao deletar currículo',
          pending: 'Deletando currículo',
          success: 'Currículo deletado com sucesso'
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
        queryClient.invalidateQueries('AllCandidates');
      }
    }
  );

  return { deleteCurriculo: mutateAsync };
};
