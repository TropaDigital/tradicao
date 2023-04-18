
import { useQuery } from 'react-query';
import RecursosClass from '../index';

export const useGetAllRecursos = (query?: string) => {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['allRecursos', query],
        async () => {
            return await RecursosClass.getAllRecursos(query);
        },
        {
            keepPreviousData: true
        }
    );

    return {
        allRecursos: data as {
            pagination: any;
            result: any[];
        },
        isLoadingAllRecursos: isLoading as boolean,
        isErrorAllRecursos: isError as boolean,
        isSuccessAllRecursos: isSuccess as boolean
    };
};