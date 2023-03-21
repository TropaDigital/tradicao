'use client';

import { AxiosResponse } from 'axios';
import API from '../api';

class UnidadesClass {
  async getUnits(query: string) {
    try {
      const response: AxiosResponse = await API.get(
        `unidades${query && '?' + query}`
      );
      console.log(response);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UnidadesClass();
