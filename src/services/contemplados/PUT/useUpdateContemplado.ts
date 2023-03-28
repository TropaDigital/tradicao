import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ContempladoClass from '../index';
import { IContempladoBody } from '../types';

interface IContempladoPost {
  contempladoBody: IContempladoBody;
  id: number | undefined;
}

export const useUpdateContemplado = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (contempladoPost: IContempladoPost) => {
      let response = toast.promise(
        async () => {
          let response: any = await ContempladoClass.updateContemplado(
            contempladoPost?.contempladoBody,
            contempladoPost?.id
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
        queryClient.invalidateQueries('AllContemplados');
      }
    }
  );
  return { updateContemplado: mutateAsync };
};
