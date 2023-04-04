'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IRelatorioBody } from './types';
import cookieClass from '@/utils/cookieClass';

class RelatioriosClass {
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

  async getAllRelatorios(query: string) {
    try {
      const response: AxiosResponse = await API.get(
        `relatorioOuvidoria${query && `?${query}`}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async createRelatorio(relatorio: IRelatorioBody) {
    try {
      const response: AxiosResponse = await API.post(
        `relatorioOuvidoria`,
        relatorio,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteRelatorio(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `relatorioOuvidoria/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateDemonstracao(
    relatorioBody: IRelatorioBody,
    id: number | undefined
  ) {
    try {
      const response: AxiosResponse = await API.put(
        `relatorioOuvidoria/${id}`,
        relatorioBody,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new RelatioriosClass();
