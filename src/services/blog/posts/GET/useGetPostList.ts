// Libraries
import { useQuery } from 'react-query';

// Classes
import PostsClass from '../index';

// Types
import { IPostList } from '../types';
import { IPagination } from '@/services/unidades/types';

export const useGetPostList = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['PostList', query],
    async () => {
      return await PostsClass.getPostList(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    postsList: data as {
      result: IPostList[];
      pagination: IPagination;
    },
    isLoadingAllPosts: isLoading as boolean,
    isErrorAllPosts: isError as boolean,
    isSuccessAllPosts: isSuccess as boolean
  };
};
