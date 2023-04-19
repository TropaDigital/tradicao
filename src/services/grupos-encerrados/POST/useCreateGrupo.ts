import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import GruposEncerradosClass from '../index';

export const useCreateGrupo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (formData: FormData) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await GruposEncerradosClass.createGrupo(
            formData
          );
          return response;
        },
        {
          error: 'Não foi possível atualziar os Grupos Encerrados',
          pending: 'Atualizando Grupos Encerrados',
          success: 'Grupos Encerrados atualizados com sucesso'
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
        queryClient.invalidateQueries('allGrupos');
      }
    }
  );

  return { createGrupo: mutateAsync };
};
