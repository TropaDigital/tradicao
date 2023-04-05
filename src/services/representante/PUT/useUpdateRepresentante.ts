import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RepresentanteClass from '../index';
import { IGetRepresentante } from '../types';

export const useUpdateRepresentante = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (representanteBody: IUpdateBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse | undefined =
            await RepresentanteClass.updateCandidate(
              representanteBody?.putBody as IGetRepresentante,
              representanteBody?.id
            );
          return response;
        },
        {
          error: `Não foi possível atualizar o representante`,
          pending: 'Atualizando representante',
          success: 'Representante atualizado com sucesso'
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
        queryClient.invalidateQueries('AllRepresentantes');
      }
    }
  );
  return { updateRepresentante: mutateAsync };
};
