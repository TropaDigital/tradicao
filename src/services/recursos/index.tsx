import { AxiosResponse } from 'axios';
import API from '../api';

class RecursosClass {
    async getAllRecursos(query?: string) {
        const response: AxiosResponse = await API.get(`/recursos${query ?? ''}`);
        return response?.data;
    }

    async deleteRecursos(id: number) {
        const response: AxiosResponse = await API.delete(`/recursos/${id}`);
        return response?.data;
    }

    async createRecursos(formData: FormData) {
        const response: AxiosResponse = await API.post(
            `/recursos-upload`,
            formData
        );
        return response?.data;
    }
}

export default new RecursosClass();
