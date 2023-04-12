import { useQuery } from 'react-query';
import PostsClass from '../index';
import { IGetPosts } from '../types';

export const useGetAllPosts = (query?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllPosts', query],
    async () => {
      return await PostsClass.getAllPosts(query);
    }
  );

  return {
    allPosts: data as { result: IGetPosts[] },
    isLoadingAllPosts: isLoading as boolean,
    isErrorAllPosts: isError as boolean,
    isSuccessAllPosts: isSuccess as boolean
  };
};
