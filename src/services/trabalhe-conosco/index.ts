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
}

export default new TrabalheConoscoClass();
