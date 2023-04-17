import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import UnitClass from '../index';
import { IUnitBody } from '../types';

interface IUnitPost {
  unitBody: IUnitBody;
  id: number | undefined;
}

export const useUpdateUnit = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (unitPost: IUnitPost) => {
      let response = toast.promise(
        async () => {
          let response: any = await UnitClass.updateUnit(
            unitPost?.unitBody,
            unitPost?.id
          );
          return response;
        },
        {
          error: `Não foi possível atualizar unidade`,
          pending: 'Atualizando unidade',
          success: 'Unidade atualizada com sucesso'
        },
        {
          position: 'top-right',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllDemonstrations');
      }
    }
  );
  return { updateUnit: mutateAsync };
};
