'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IGetRepresentante } from './types';
import cookieClass from '@/utils/cookieClass';

class RepresentanteClass {
  async getAllCandidates(query?: string) {
    try {
      const response: AxiosResponse = await API.get(
        `getAll-representante${query && `?${query}`}`
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
        agentInfo
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCandidate(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `delete-representante/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new RepresentanteClass();
