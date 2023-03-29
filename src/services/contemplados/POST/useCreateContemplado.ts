import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import ContempladoClass from '../index';
import { IContempladoBody } from '../types';

export const useCreateContemplado = () => {
  const { mutateAsync } = useMutation(
    async (contempladoBody: IContempladoBody) => {
      let response: any = await ContempladoClass.createContemplado(
        contempladoBody
      );
      return response.data?.result;
    },
    {
      retry: true
    }
  );

  return { createContemplado: mutateAsync };
};
