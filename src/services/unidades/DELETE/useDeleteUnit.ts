import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import UnitClass from '../index';

export const useDeleteUnit = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      try {
        let response: any = await UnitClass.deleteUnit(id);
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

  return { deleteUnit: mutateAsync };
};
