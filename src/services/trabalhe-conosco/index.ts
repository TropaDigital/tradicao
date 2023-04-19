'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { ICadidateInfo } from './types';
import cookieClass from '@/utils/cookieClass';

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

  async getAllCandidate(query?: string) {
    try {
      const response: AxiosResponse = await API.get(
        `getAll-TrabalheConosco${query && `?${query}`}`
      );
      return response?.data;
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

  async updateCandidate(candidateBody: ICadidateInfo, id: number | undefined) {
    try {
      const response: AxiosResponse = await API.put(
        `update-TrabalheConosco/${id}`,
        candidateBody
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
