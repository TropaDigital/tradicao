import AssembleiaContempladoClass from '../index';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteAssembleiaContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response: any =
        await AssembleiaContempladoClass.deleteAssembleiaContemplado(id);
      return response;
    },
    {
      onSuccess: () => {
        queryClient?.invalidateQueries('AllAssembleiaContemplados');
      }
    }
  );

  return { deleteContemplado: mutateAsync };
};
