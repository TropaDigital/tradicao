import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RelatoriosClass from '../index';
import { IRelatorioBody } from '../types';

export const useCreateRelatorio = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (relatorio: IRelatorioBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await RelatoriosClass.createRelatorio(
            relatorio
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
      retry: true,
      onSuccess: () => {
        queryClient.invalidateQueries('AllRelatories');
      }
    }
  );

  return { createRelatorio: mutateAsync };
};
