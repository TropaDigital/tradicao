'use client';

import { AxiosResponse } from 'axios';
import API from '../api';
import { IDenunciaBody } from './types';
import cookieClass from '@/utils/cookieClass';

class DenunciaClass {
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

  async getAllComplaint() {
    try {
      const response: AxiosResponse = await API.get(`denuncia`, {
        headers: {
          Authorization: `Bearer ${this.AUTH_TOKEN}`
        }
      });
      return response?.data?.result;
    } catch (err) {
      console.log(err);
    }
  }

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
        `denuncia/${denunciaId}`,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default new DenunciaClass();
