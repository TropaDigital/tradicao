import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import FileClass from '../index';

interface IParams {
  endpoint: string;
  id: number | string;
}

export const useDeleteFile = () => {
  const { mutateAsync } = useMutation(async ({ endpoint, id }: IParams) => {
    let response = toast.promise(
      async () => {
        let response: any = await FileClass.deleteFile(endpoint, id);

        return response;
      },
      {
        error: `Não foi possível deletar arquivo`,
        pending: 'Deletando arquivo',
        success: 'Arquivo deletado com sucesso'
      },
      {
        position: 'top-right',
        autoClose: 3000
      }
    );
    return response;
  });

  return { deleteFile: mutateAsync };
};
