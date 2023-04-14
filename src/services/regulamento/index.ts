import { AxiosResponse } from 'axios';
import API from '../api';

class RegulamentoClass {
  async updateRegulamento(url: string) {
    try {
      let response: AxiosResponse = await API.put(`/regulamento/1`, {
        regulamento: url
      });
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getRegulamento() {
    try {
      let response: AxiosResponse = await API.get(`/regulamento`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new RegulamentoClass();
