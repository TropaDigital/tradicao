import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import RecursosClass from '../index';

export const useCreateRecursos = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (urlPlanilha: string) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await RecursosClass.createRecursos(
            urlPlanilha
          );
          return response;
        },
        {
          error: 'Não foi possível criar Recursos não procurados',
          pending: 'Criando Recursos',
          success: 'Recursos criada com sucesso'
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
        queryClient.invalidateQueries('allRecursos');
      }
    }
  );

  return { createRecursos: mutateAsync };
};
