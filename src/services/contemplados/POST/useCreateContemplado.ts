import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import ContempladoClass from '../index';
import { IContempladoBody } from '../types';

export const useCreateContemplado = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (contempladoBody: IContempladoBody) => {
      let response: AxiosResponse = await ContempladoClass.createContemplado(
        contempladoBody
      );
      return response.data?.result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllContemplados');
      },
      retry: true
    }
  );

  return { createContemplado: mutateAsync };
};
