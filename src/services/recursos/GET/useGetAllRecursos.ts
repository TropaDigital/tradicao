
import { useQuery } from 'react-query';
import RecursosClass from '../index';

export const useGetAllRecursos = (query?: string) => {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['allRecursos', query],
        async () => {
            if (query !== '') {

                return await RecursosClass.getAllRecursos(query);
            }
        },
        {
            keepPreviousData: true
        }
    );

    return {
        getRecursos: data as {
            result: any[];
        },
        isLoadingAllRecursos: isLoading as boolean,
        isErrorAllRecursos: isError as boolean,
        isSuccessAllRecursos: isSuccess as boolean
    };
};