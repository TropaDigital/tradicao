// Libraries
import { useQuery } from 'react-query';

// Classes
import PostsClass from '../index';

// Types
import { IPostInfo } from '../types';
import { IPagination } from '@/services/unidades/types';

export const useGetPostInfo = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['PostInfo', query],
    async () => {
      return await PostsClass.getPostInfo(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    postsInfo: data?.result as {
      data: IPostInfo[];
      pagination: IPagination;
    },
    isLoadingAllPosts: isLoading as boolean,
    isErrorAllPosts: isError as boolean,
    isSuccessAllPosts: isSuccess as boolean
  };
};
