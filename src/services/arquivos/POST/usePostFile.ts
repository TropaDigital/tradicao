import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import FileClass from '../index';

export const usePostFile = () => {
  const { mutateAsync } = useMutation(
    async (file: FormData) => {
      let response: AxiosResponse<any, any> | undefined =
        await FileClass.postFile(file);
      return response?.data?.arquivo;
    },
    {
      retry: true
    }
  );

  return { postFile: mutateAsync };
};
