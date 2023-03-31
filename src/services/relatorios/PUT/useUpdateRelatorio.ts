import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracaoClass from '../index';
import { IRelatorioBody } from '../types';

export const useUpdateRelatorio = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (relatorioPost: IUpdateBody) => {
      let response = toast.promise(
        async () => {
          let response: any = await DemonstracaoClass.updateDemonstracao(
            relatorioPost?.putBody as IRelatorioBody,
            relatorioPost?.id
          );
          return response;
        },
        {
          error: `Não foi possível atualizar contemplado`,
          pending: 'Atualizando contemplado',
          success: 'Contemplado atualizado com sucesso'
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
  return { updateRelatorio: mutateAsync };
};
