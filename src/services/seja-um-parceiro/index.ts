import { IPartnerPayload } from '@/app/(page)/seja-um-parceiro/types';
import { AxiosResponse } from 'axios';
import API from '../api';

class ParceiroClass {
  async getParceiro() {
    try {
      const response: AxiosResponse = await API.get(`/sejaUmParceiro`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async createParceiro(data: IPartnerPayload) {
    try {
      const response: AxiosResponse = await API.post(`/sejaUmParceiro`, data);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateParceiro(id: number, data: IPartnerPayload) {
    try {
      const response: AxiosResponse = await API.put(
        `/sejaUmParceiro/${id}`,
        data
      );
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteParceiro(id: number) {
    try {
      const response: AxiosResponse = await API.delete(`/sejaUmParceiro/${id}`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ParceiroClass();
