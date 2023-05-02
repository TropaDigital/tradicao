import { IUpdateBody } from '@/services/types';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import GruposEncerradosClass from '../index';

interface IGrupoPost {
  putBody: {
    grupo: string;
    data_encerramento: string;
  };
  id: number;
}

export const useUpdateGrupo = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (grupoPost: IGrupoPost) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await GruposEncerradosClass.updateGrupo(
            grupoPost?.id,
            grupoPost?.putBody
          );
          return response;
        },
        {
          error: `Não foi possível atualizar grupo`,
          pending: 'Atualizando grupo',
          success: 'Grupo atualizado com sucesso'
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
  return { updateGrupo: mutateAsync };
};
