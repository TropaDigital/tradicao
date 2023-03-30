import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracoesClass from '../index';

export const useDeleteDemonstracoes = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      try {
        let response: any = await DemonstracoesClass.deleteDemonstracao(id);
        return response;
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllDemonstrations');
      }
    }
  );

  return { deleteDemonstracao: mutateAsync };
};
