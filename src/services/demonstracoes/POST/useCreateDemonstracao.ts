import { useMutation, useQueryClient } from 'react-query';
import DemonstracoesClass from '../index';
import { IDemonstracaoBody } from '../interface';

export const useCreateDemonstracao = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (demonstracao: IDemonstracaoBody) => {
      let response: any = await DemonstracoesClass.createDemonstration(
        demonstracao
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
