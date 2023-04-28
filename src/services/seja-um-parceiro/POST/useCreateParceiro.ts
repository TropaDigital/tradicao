import { IPartnerPayload } from '@/app/(page)/seja-um-parceiro/types';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ParceiroClass from '../index';

export const useCreateParceiro = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (dataBody: IPartnerPayload) => {
      let response = toast.promise(
        async () => {
          let response: any = await ParceiroClass.createParceiro(dataBody);
          return response;
        },
        {
          error: `Não foi possível cadastrar parceiro`,
          pending: 'Cadastrando parceiro',
          success: 'Cadastro enviado com sucesso'
        },
        {
          position: 'bottom-right',
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

  return { createParceiro: mutateAsync };
};
