import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AssembleiaContempladoClass from '../index';
import { IAssembleiaContempladoUpdate } from '../types';

export const useUpdateAssembleiaContemplado = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (assembleiaContemplado: IAssembleiaContempladoUpdate) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await AssembleiaContempladoClass.updateAssembleiaContemplado(
              assembleiaContemplado?.id,
              assembleiaContemplado?.contemplado
            );
          return response;
        },
        {
          error: `Não foi possível atualizar item`,
          pending: 'Atualizando item',
          success: 'Item atualizada com sucesso'
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
        queryClient?.invalidateQueries('AllAssembleiaContemplados');
      }
    }
  );
  return { updateContemplado: mutateAsync };
};
