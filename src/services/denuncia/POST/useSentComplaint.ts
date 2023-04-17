import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import DenunciaClass from '../index';
import { IDenunciaBody } from '../types';

export const useSentComplaint = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (denuncia: IDenunciaBody) => {
      let response = toast.promise(
        async () => {
          try {
            let response: any = await DenunciaClass.postComplaint(denuncia);
            return response;
          } catch (err) {
            console.log(err);
          }
        },
        {
          error: 'Não foi possível enviar denúncia',
          pending: 'Enviando denúncia',
          success: 'Denúncia enviada com sucesso!"'
        },
        {
          autoClose: 3000,
          position: 'top-right'
        }
      );

      return response;
    },
    {
      retry: true
    }
  );

  return { sentComplaint: mutateAsync };
};
