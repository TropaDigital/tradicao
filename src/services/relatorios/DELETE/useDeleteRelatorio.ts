import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RelatioriosClass from '../index';

export const useDeleteRelatorio = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await RelatioriosClass.deleteRelatorio(
            id
          );
          return response;
        },
        {
          error: 'Erro',
          pending: 'Pending',
          success: 'Success'
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
        queryClient.invalidateQueries('AllRelatories');
      }
    }
  );

  return { deleteRelatorio: mutateAsync };
};
