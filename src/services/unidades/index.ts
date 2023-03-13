'use client'

import { AxiosResponse } from 'axios';
import API from '../api';

class UnidadesClass {
    async getAllUnits() {
        try {
            const response: AxiosResponse = await API.get(
                `getAll-unidade`
            )
            return response.data.result
        } catch(err) {
            console.log(err)
        }
    }
}

export default new UnidadesClass()