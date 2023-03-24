import { useMutation } from 'react-query';
import UnidadesClass from '../index';
import { IUnitBody } from '../types';

export const useCreateUnit = () => {
  const { mutateAsync } = useMutation(
    async (unitBody: IUnitBody) => {
      let response: any = await UnidadesClass.createUnit(unitBody);
      return response;
    },
    {
      retry: true
    }
  );

  return { createUnit: mutateAsync };
};
