import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import postClass from '../index';

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (id: number) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await postClass.deletePost(id);

          return response;
        },
        {
          error: 'Não foi possível deletar a postagem',
          pending: 'Deletando postagem',
          success: 'Postagem deletada com sucesso'
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
        queryClient.invalidateQueries('AllPosts');
      }
    }
  );

  return { deletePost: mutateAsync };
};
