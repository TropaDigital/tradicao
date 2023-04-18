import GruposEncerradosClass from '../index';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteGrupo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response: any = await GruposEncerradosClass.deleteGrupo(id);
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
