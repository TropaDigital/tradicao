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

    async getUnitById(id: number | string) {
        try {
            const response: AxiosResponse = await API.get(
                `getById-unidade/${id}`
            )
            return response.data.result
        } catch(err) {
            console.log(err)
        }
    }
}

export default new UnidadesClass()