import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AssembleiaContempladoClass from '../index';
import { IAssembleiaContempladoBody } from '../types';

export const useCreateAssembleiaContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (assembleiaContempladoBody: IAssembleiaContempladoBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse =
            await AssembleiaContempladoClass.createAssembleiaContemplado(
              assembleiaContempladoBody
            );
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
        queryClient.invalidateQueries('AllAssembleiaContemplados');
      }
    }
  );

  return { createContemplado: mutateAsync };
};
