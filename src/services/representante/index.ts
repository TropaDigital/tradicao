'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IAgentInfo } from './types';

class RepresentanteClass {
  async getAllCandidates() {
    try {
      const response: AxiosResponse = await API.get(`getAll-representante`);
      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  async postCandidate(agentInfo: IAgentInfo) {
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
}

export default new RepresentanteClass();
