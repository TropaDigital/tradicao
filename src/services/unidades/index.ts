'use client';

import { Axios, AxiosResponse } from 'axios';
import API from '../api';
import { IUnitBody } from './types';

class UnidadesClass {
  async getUnits(query: string) {
    try {
      const response: AxiosResponse = await API.get(
        `unidades${query && '?' + query}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateUnit(unitBody: IUnitBody, id: number | undefined) {
    try {
      const response: AxiosResponse = await API.put(`unidades/${id}`, unitBody);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async createUnit(unitBody: IUnitBody) {
    try {
      const response: AxiosResponse = await API.post(`unidades`, unitBody);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUnit(id: number) {
    try {
      const response: AxiosResponse = await API.delete(`unidades/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UnidadesClass();
