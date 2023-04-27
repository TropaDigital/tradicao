import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AssembleiaClass from '../index';

export const useUpdateAssembleia = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (assembleiaBody: { id: number; assembleiaPutBody: any }) => {
      let response = toast
        .promise(
          async () => {
            let response: AxiosResponse =
              await AssembleiaClass.updateAssembleia(
                assembleiaBody?.id,
                assembleiaBody?.assembleiaPutBody
              );
            return response;
          },
          {
            pending: 'Atualizando assembleia',
            success: 'Assembleia atualizada com sucesso'
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
        queryClient.invalidateQueries('allAssembleias');
      }
    }
  );
  return { updateAssembleia: mutateAsync };
};
