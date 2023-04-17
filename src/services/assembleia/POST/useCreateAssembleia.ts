import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AssembleiaClass from '../index';

export const useCreateAssembleia = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (assembleiaBody: FormData) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await AssembleiaClass.createAssembleia(
            assembleiaBody
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
