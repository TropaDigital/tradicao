import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import PostClass from '../index';
import { IUpdatePostBody } from '../PUT/types';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (postBody: IUpdatePostBody) => {
      let response = toast.promise(
        async () => {
          let response: AxiosResponse = await PostClass.createPost(postBody);
          return response?.data?.result;
        },
        {
          error: 'Não foi possível publicar postagem',
          pending: 'Publicando postagem',
          success: 'Postagem publicada com sucesso'
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

  return { createPost: mutateAsync };
};
