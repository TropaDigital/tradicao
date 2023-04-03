import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DemonstracaoClass from '../index';
import { IContempladoPost } from './types';

export const useUptadeDemonstracao = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (demonstracaoPost: IContempladoPost) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await DemonstracaoClass.updateDemonstracao(
              demonstracaoPost?.demonstracaoBody,
              demonstracaoPost?.id
            );
          return response;
        },
        {
          error: `Não foi possível atualizar demonstração`,
          pending: 'Atualizando demonstração',
          success: 'Demonstração atualizada com sucesso'
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
