import { AxiosResponse } from 'axios';
import API from '../api';

class CountersClass {
    async getAllCounters() {
        const response: AxiosResponse = await API.get(`/contadores`);
        return response?.data;
    }
}

export default new CountersClass();