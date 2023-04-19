'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IDemonstracaoBody } from './interface';
import cookieClass from '@/utils/cookieClass';

class DemonstracoesClass {
  async getAllDemonstrations(query?: string) {
    try {
      const response: AxiosResponse = await API.get(
        `getAll-demonstracao${query && `?${query}`}`
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async createDemonstration(demonstracaoBody: IDemonstracaoBody) {
    try {
      const response: AxiosResponse = await API.post(
        `create-demonstracao`,
        demonstracaoBody
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async updateDemonstracao(
    demonstracaoBody: IDemonstracaoBody,
    id: number | undefined
  ) {
    try {
      const response: AxiosResponse = await API.put(
        `update-demonstracao/${id}`,
        demonstracaoBody
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteDemonstracao(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `delete-demonstracao/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new DemonstracoesClass();
