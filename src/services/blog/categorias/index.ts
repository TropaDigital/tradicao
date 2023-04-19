'use client';

import { AxiosResponse } from 'axios';
import API from '../../api';
import cookieClass from '@/utils/cookieClass';

class CategoriasClass {
  async getAllCategorias() {
    try {
      const response: AxiosResponse = await API.get(`/blog/categoria`);
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteComplaint(denunciaId: string | number) {
    try {
      const response: AxiosResponse = await API.delete(
        `denuncia/${denunciaId}`
      );
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default new CategoriasClass();
