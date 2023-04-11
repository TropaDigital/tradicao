import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import RepresentanteClass from '../index';
import { IGetRepresentante } from '../types';
import { toast } from 'react-toastify';

export const useCreateAgent = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (agent: IGetRepresentante) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse | undefined =
            await RepresentanteClass.postCandidate(agent);
          return response;
        },
        {
          error: `Não foi possível realizar o cadastro de representante`,
          pending: 'Cadastrando representante',
          success: 'Representante cadastrado com sucesso'
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
        queryClient.invalidateQueries('AllRepresentantes');
      }
    }
  );

  return { createAgent: mutateAsync };
};
