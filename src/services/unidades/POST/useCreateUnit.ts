import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import UnidadesClass from '../index';
import { IUnitBody } from '../types';

export const useCreateUnit = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (unitBody: IUnitBody) => {
      let response = toast.promise(
        async () => {
          let response: any = await UnidadesClass.createUnit(unitBody);
          return response;
        },
        {
          error: `Não foi possível realizar o cadastro da unidade`,
          pending: 'Cadastrando unidade',
          success: 'Unidade cadastrada com sucesso'
        },
        {
          position: 'top-right',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      retry: true,
      onSuccess: () => {
        queryClient.invalidateQueries('UnitsByQuery');
      }
    }
  );

  return { createUnit: mutateAsync };
};
