'use client';

import { AxiosResponse } from 'axios';
import API from '../../api';

class CategoriasClass {
  async getAllCategorias() {
    try {
      const response: AxiosResponse = await API.get(`/blog/categoria`);
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new CategoriasClass();
