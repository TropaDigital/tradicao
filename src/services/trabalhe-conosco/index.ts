'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { ICadidateInfo } from './types';

class TrabalheConoscoClass {
  async postCandidate(candidateInfo: ICadidateInfo) {
    try {
      const response: AxiosResponse = await API.post(
        `create-TrabalheConosco`,
        candidateInfo
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async getAllCandidate() {
    try {
      const response: AxiosResponse = await API.get(`getAll-TrabalheConosco`);
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }

  async getCandidateById(id: number) {
    try {
      const response: AxiosResponse = await API.get(
        `getById-TrabalheConosco/${id}`
      );
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCandidate(id: number) {
    try {
      const response: AxiosResponse = await API.delete(
        `delete-TrabalheConosco/${id}`
      );
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TrabalheConoscoClass();
