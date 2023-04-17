import { IPagination } from '@/services/unidades/types';
import { useQuery } from 'react-query';
import PostsClass from '../index';
import { IGetPosts } from '../types';

export const useGetAllPosts = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllPosts', query],
    async () => {
      return await PostsClass.getAllPosts(query);
    },
    {
      keepPreviousData: true
    }
  );

  return {
    allPosts: data as { result: IGetPosts[]; pagination: IPagination },
    isLoadingAllPosts: isLoading as boolean,
    isErrorAllPosts: isError as boolean,
    isSuccessAllPosts: isSuccess as boolean
  };
};
