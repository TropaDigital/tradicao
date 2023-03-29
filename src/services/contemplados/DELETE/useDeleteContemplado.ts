import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ContempladosClass from '../index';

export const useDeleteContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      try {
        let response: any = await ContempladosClass.deleteContemplado(id);
        return response;
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllContemplados');
      }
    }
  );

  return { deleteContemplado: mutateAsync };
};
