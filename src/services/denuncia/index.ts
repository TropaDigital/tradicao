'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IDenunciaBody } from './types';

class DenunciaClass {
  async postComplaint(denunciaBody: IDenunciaBody) {
    try {
      const response: AxiosResponse = await API.post(`denuncia`, denunciaBody);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteComplaint(denunciaId: string | number) {
    try {
      const response: AxiosResponse = await API.delete(
        `denuncia/${denunciaId}`
      );
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default new DenunciaClass();
