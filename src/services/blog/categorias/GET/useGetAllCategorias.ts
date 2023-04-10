import { useQuery } from 'react-query';
import CategoriasClass from '../index';
import { IGetCategorias } from '../types';

export const useGetAllCategorias = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllCategorias'],
    async () => {
      return await CategoriasClass.getAllCategorias();
    }
  );

  return {
    allCategorias: data as IGetCategorias[],
    isLoadingAllCategorias: isLoading as boolean,
    isErrorAllCategorias: isError as boolean,
    isSuccessAllCategorias: isSuccess as boolean
  };
};
