import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracaoClass from '../index';
import { IDemonstracaoBody } from '../interface';

interface IContempladoPost {
  demonstracaoBody: IDemonstracaoBody;
  id: number | undefined;
}

export const useUptadeDemonstracao = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (demonstracaoPost: IContempladoPost) => {
      let response = toast.promise(
        async () => {
          let response: any = await DemonstracaoClass.updateDemonstracao(
            demonstracaoPost?.demonstracaoBody,
            demonstracaoPost?.id
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
        queryClient.invalidateQueries('AllDemonstrations');
      }
    }
  );
  return { updateDemonstracao: mutateAsync };
};
