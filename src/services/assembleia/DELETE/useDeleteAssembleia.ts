import AssembleiaClass from '../index';
import { useMutation } from 'react-query';

export const useDeleteAssembleia = () => {
  const { mutateAsync } = useMutation(async (id: number) => {
    let response: any = await AssembleiaClass.deleteAssembleia(id);
    return response;
  });

  return { deleteAssembleia: mutateAsync };
};
