import { useMutation } from 'react-query';
import DemonstracoesClass from '../index';
import { IDemonstracaoBody } from '../interface';

export const useCreateDemonstracao = () => {
  const { mutateAsync } = useMutation(
    async (demonstracao: IDemonstracaoBody) => {
      let response: any = await DemonstracoesClass.createDemonstration(
        demonstracao
      );
      return response;
    },
    {
      retry: true
    }
  );

  return { createDemonstracao: mutateAsync };
};
