import GruposEncerradosClass from '../index';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useDeleteGrupo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: any = await GruposEncerradosClass.deleteGrupo(id);
          return response;
        },
        {
          error: 'Não foi possível deletar grupo',
          pending: 'Deletando grupo',
          success: 'Grupo deletado com sucesso'
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
        queryClient?.invalidateQueries('allGrupos');
      }
    }
  );

  return { deleteGrupo: mutateAsync };
};
