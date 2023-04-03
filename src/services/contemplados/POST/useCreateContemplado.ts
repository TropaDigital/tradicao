import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ContempladoClass from '../index';
import { IContempladoBody } from '../types';

export const useCreateContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (contempladoBody: IContempladoBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await ContempladoClass.createContemplado(contempladoBody);
          return response.data?.result;
        },
        {
          error: 'Não foi possível cadastrar contemplado',
          pending: 'Cadastrando contemplado',
          success: 'Contemplado cadastrado com sucesso'
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

  return { createContemplado: mutateAsync };
};
