import { IPartnerPayload } from '@/app/(page)/seja-um-parceiro/types';
import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ParceirosClass from '../index';

export const useUpdateParceiro = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (representanteBody: IUpdateBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse | undefined =
            await ParceirosClass.updateParceiro(
              representanteBody?.id,
              representanteBody?.putBody as IPartnerPayload
            );
          return response;
        },
        {
          error: `Não foi possível atualizar o parceiro`,
          pending: 'Atualizando parceiro',
          success: 'Parceiro atualizado com sucesso'
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
        queryClient.invalidateQueries('allParceiros');
      }
    }
  );
  return { updateParceiro: mutateAsync };
};
