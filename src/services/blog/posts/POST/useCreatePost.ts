import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import PostsClass from '../index';
import { IUpdatePostBody } from '../PUT/types';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (postBody: IUpdatePostBody) => {
      let response = toast
        .promise(
          async () => {
            let response: any = await PostsClass.createPost(postBody);
            return response;
          },
          {
            pending: 'Criando Postagem',
            success: 'Postagem criada com sucesso'
          }
        )
        .catch((err) => {
          toast.error(String(err));
        });

      return await response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllPosts');
      }
    }
  );

  // console.log(mutateAsync());

  return { createPost: mutateAsync };
};
