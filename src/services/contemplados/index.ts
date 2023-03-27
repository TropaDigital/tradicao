'use client';

import { AxiosResponse } from 'axios';
import API from '../api';

class ContempladosClass {
  async getAllContemplados() {
    try {
      const response: AxiosResponse = await API.get(`getAll-contemplado`);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteContemplado(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `delete-contemplado/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ContempladosClass();
