import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import DenunciaClass from '../index';

export const useDeleteComplaint = () => {
  const { mutateAsync } = useMutation(
    async (denunciaID: string | number) => {
      let response: AxiosResponse | undefined | unknown =
        await DenunciaClass.deleteComplaint(denunciaID);
      return response;
    },
    {
      retry: true
    }
  );

  return { sentComplaint: mutateAsync };
};
