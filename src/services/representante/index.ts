'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IGetRepresentante } from './types';
import cookieClass from '@/utils/cookieClass';

class RepresentanteClass {
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

  async getAllCandidates(query?: string) {
    try {
      const response: AxiosResponse = await API.get(
        `getAll-representante${query && `?${query}`}`,
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

  async postCandidate(agentInfo: IGetRepresentante) {
    try {
      const response: AxiosResponse = await API.post(
        `create-representante`,
        agentInfo
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async updateCandidate(agentInfo: IGetRepresentante, id: number) {
    try {
      const response: AxiosResponse = await API.put(
        `update-representante/${id}`,
        agentInfo,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCandidate(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `delete-representante/${id}`,
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
}

export default new RepresentanteClass();
