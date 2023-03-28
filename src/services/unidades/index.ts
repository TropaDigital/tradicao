'use client';

import { Axios, AxiosResponse } from 'axios';
import API from '../api';
import { IUnitBody } from './types';

class UnidadesClass {
  async getUnits(query: string, page: number | string) {
    try {
      const response: AxiosResponse = await API.get(
        `unidades?${query}&limit=16&page=${page}`
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async createUnit(unitBody: IUnitBody) {
    try {
      const response: AxiosResponse = await API.post(
        `create-unidade`,
        unitBody
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UnidadesClass();
