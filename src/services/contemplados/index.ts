'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IContempladoBody } from './types';

class ContempladosClass {
  async getAllContemplados() {
    try {
      const response: AxiosResponse = await API.get(`getAll-contemplado`);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async updateContemplado(
    contempladoBody: IContempladoBody,
    id: number | undefined
  ) {
    try {
      const response: AxiosResponse = await API.put(
        `update-contemplado/${id}`,
        contempladoBody
      );
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