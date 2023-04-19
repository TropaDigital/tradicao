'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IContempladoBody } from './types';
import cookieClass from '@/utils/cookieClass';
class ContempladosClass {
  async getAllContemplados(query?: string) {
    try {
      const response: AxiosResponse = await API.get(
        `getAll-contemplado${query && `?${query}`}`
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async createContemplado(contempladoBody: IContempladoBody) {
    try {
      const response: AxiosResponse = await API.post(
        `create-contemplado`,
        contempladoBody
      );
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
