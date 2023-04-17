import FileClass from '../index';
import { useMutation } from 'react-query';
import { IParams } from './types';

export const useDeleteFile = () => {
  const { mutateAsync } = useMutation(async ({ endpoint, id }: IParams) => {
    let response: any = await FileClass.deleteFile(endpoint, id);
    return response;
  });

  return { deleteFile: mutateAsync };
};
