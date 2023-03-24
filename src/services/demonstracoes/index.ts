'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IDemonstracaoBody } from './interface';

class DemonstracoesClass {
  async getAllDemonstrations() {
    try {
      const response: AxiosResponse = await API.get(`getAll-demonstracao`);
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
}

export default new DemonstracoesClass();
