'use client'

import { AxiosResponse } from 'axios';
import API from '../api';

class DemonstracoesClass {
    async getAllDemonstrations() {
        try {
            const response: AxiosResponse = await API.get(
                `getAll-demonstracao`
            )
            return response.data.result
        } catch(err) {
            console.log(err)
        }
    }
}

export default new DemonstracoesClass()