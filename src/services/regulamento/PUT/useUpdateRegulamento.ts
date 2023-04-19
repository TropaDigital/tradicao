import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RegulamentoClass from '../index';

export const useUpdateRegulamento = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (url: string) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await RegulamentoClass.updateRegulamento(url);
          return response;
        },
        {
          error: `Não foi possível atualizar regulamento`,
          pending: 'Atualizando regulamento',
          success: 'Regulamento atualizado com sucesso'
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
        queryClient?.invalidateQueries('regulamento');
      }
    }
  );
  return { updateRegulamento: mutateAsync };
};
