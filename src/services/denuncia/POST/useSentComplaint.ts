import { useMutation } from 'react-query';
import DenunciaClass from '../index';
import { IDenunciaBody } from '../types';

export const useSentComplaint = () => {
  const { mutateAsync } = useMutation(
    async (denuncia: IDenunciaBody) => {
      let response: any = await DenunciaClass.postComplaint(denuncia);
      return response;
    },
    {
      retry: true
    }
  );

  return { sentComplaint: mutateAsync };
};
