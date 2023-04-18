import AssembleiaClass from '../index';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteAssembleia = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response: any = await AssembleiaClass.deleteAssembleia(id);
      return response;
    },
    {
      onSuccess: () => {
        queryClient?.invalidateQueries('allAssembleias');
      }
    }
  );

  return { deleteAssembleia: mutateAsync };
};
