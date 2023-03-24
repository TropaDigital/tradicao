'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IRelatorioBody } from './types';

class RelatioriosClass {
  async getAllRelatorios() {
    try {
      const response: AxiosResponse = await API.get(`relatorioOuvidoria`);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async createRelatorio(relatorio: IRelatorioBody) {
    try {
      const response: AxiosResponse = await API.post(
        `relatorioOuvidoria`,
        relatorio
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new RelatioriosClass();
