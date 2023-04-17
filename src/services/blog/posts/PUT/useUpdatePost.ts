import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import PostsClass from '../index';
import { IUpdatePostObject } from './types';

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (post: IUpdatePostObject) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await PostsClass.updatePost(
            post?.postagem,
            post?.id
          );
          return response;
        },
        {
          error: `Não foi possível atualizar postagem`,
          pending: 'Atualizando postagem',
          success: 'Postagem atualizada com sucesso'
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
  return { updatePost: mutateAsync };
};
