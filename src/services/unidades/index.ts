'use client';

import { Axios, AxiosResponse } from 'axios';
import API from '../api';
import { IUnitBody } from './types';
import cookieClass from '@/utils/cookieClass';

class UnidadesClass {
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

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
      const response: AxiosResponse = await API.put(
        `unidades/${id}`,
        unitBody,
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

  async createUnit(unitBody: IUnitBody) {
    try {
      const response: AxiosResponse = await API.post(`unidades`, unitBody, {
        headers: {
          Authorization: `Bearer ${this.AUTH_TOKEN}`
        }
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUnit(id: number) {
    try {
      const response: AxiosResponse = await API.delete(`unidades/${id}`, {
        headers: {
          Authorization: `Bearer ${this.AUTH_TOKEN}`
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UnidadesClass();
