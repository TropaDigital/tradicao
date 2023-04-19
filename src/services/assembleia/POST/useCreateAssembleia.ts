import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AssembleiaClass from '../index';
import cookieClass from '@/utils/cookieClass';

export const useCreateAssembleia = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (formData: FormData) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await AssembleiaClass.createAssembleia(
            formData
          );
          return response;
        },
        {
          error: 'Não foi possível criar Assembleia',
          pending: 'Criando Assembleia',
          success: 'Assembleia criada com sucesso'
        },
        {
          position: 'top-right',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      retry: true,
      onSuccess: () => {
        queryClient.invalidateQueries('allAssembleias');
      }
    }
  );

  return { createAssembleia: mutateAsync };
};
