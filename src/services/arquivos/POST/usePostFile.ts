import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import FileClass from '../index';

export const usePostFile = () => {
  const { mutateAsync } = useMutation(
    async (curriculum: any) => {
      let response: any = await FileClass.postFile(curriculum);
      console.log(response);
      return response.data?.arquivo;
    },
    {
      retry: true
    }
  );

  return { postFile: mutateAsync };
};
