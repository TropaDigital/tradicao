import { useQuery } from 'react-query';
import VideoClass from '../index';
import { IVideoResponse } from '../types';

export const useGetVideo = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['video'],
    async () => {
      return await VideoClass.getVideo();
    },
    {
      keepPreviousData: true
    }
  );

  return {
    video: data?.result[0] as IVideoResponse,
    isLoading,
    isError,
    isSuccess
  };
};
