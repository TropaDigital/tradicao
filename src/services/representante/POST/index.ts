import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import TrabalheConoscoClass from '../index';
import { IAgentInfo } from '../types';
import { toast } from 'react-toastify';

export const useCreateAgent = () => {
  const { mutateAsync } = useMutation(
    async (agent: IAgentInfo) => {
      let response = toast.promise(
        async () => {
          let response: any = await TrabalheConoscoClass.postCandidate(agent);
          return response;
        },
        {
          error: `Não foi possível realizar o cadastro de representante`,
          pending: 'Cadastrando representante',
          success: 'Representante cadastrado com sucesso'
        },
        {
          position: 'bottom-left',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      retry: true
    }
  );

  return { createAgent: mutateAsync };
};
