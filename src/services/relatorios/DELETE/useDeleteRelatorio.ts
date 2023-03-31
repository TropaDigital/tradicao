import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RelatioriosClass from '../index';

export const useDeleteRelatorio = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      try {
        let response: any = await RelatioriosClass.deleteRelatorio(id);
        return response;
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllRelatories');
      }
    }
  );

  return { deleteRelatorio: mutateAsync };
};
