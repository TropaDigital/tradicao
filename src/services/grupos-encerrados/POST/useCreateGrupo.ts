import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import GruposEncerradosClass from '../index';

export const useCreateGrupo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (formData: FormData) => {
      let response = toast
        .promise(
          async () => {
            let response: AxiosResponse =
              await GruposEncerradosClass.createGrupo(formData);
            return response;
          },
          {
            pending: 'Atualizando Grupos Encerrados',
            success: 'Grupos Encerrados atualizados com sucesso'
          },
          {
            position: 'top-right',
            autoClose: 3000
          }
        )
        .catch((err) => {
          toast.error(err?.response?.data?.result[0]?.erro);
        });
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
