import { useMutation } from 'react-query';
import RelatoriosClass from '../index';
import { IRelatorioBody } from '../types';

export const useCreateRelatorio = () => {
  const { mutateAsync } = useMutation(
    async (relatorio: IRelatorioBody) => {
      let response: any = await RelatoriosClass.createRelatorio(relatorio);
      return response;
    },
    {
      retry: true
    }
  );

  return { createRelatorio: mutateAsync };
};
