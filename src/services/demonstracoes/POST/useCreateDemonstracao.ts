import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracoesClass from '../index';
import { IDemonstracaoBody } from '../interface';

export const useCreateDemonstracao = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (demonstracao: IDemonstracaoBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await DemonstracoesClass.createDemonstration(demonstracao);
          return response;
        },
        {
          error: 'Não foi possível criar Demonstração Financeira',
          pending: 'Criando Demonstração Financeira',
          success: 'Demonstração Financeira criada com sucesso'
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
        queryClient.invalidateQueries('AllDemonstrations');
      }
    }
  );

  return { createDemonstracao: mutateAsync };
};
