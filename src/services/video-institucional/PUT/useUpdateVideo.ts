import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import VideoClass from '../index';

type videoObjectType = {
  url_video: string;
  url_thumb: string;
};

export const useUpdateVideo = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (videoObject: videoObjectType) => {
      let response = toast.promise(
        async () => {
          let response: any = await VideoClass.updateVideo(videoObject);
          return response;
        },
        {
          error: `Não foi possível atualizar vídeo`,
          pending: 'Atualizando vídeo institucional',
          success: 'Vídeo institucional atualizado com sucesso'
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
        queryClient.invalidateQueries('video');
      }
    }
  );
  return { updateVideo: mutateAsync };
};
