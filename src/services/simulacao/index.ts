import { AxiosResponse } from 'axios';
import API from '../api';
import { ISimulacaoPayload } from './types';

class SimulacaoClass {
  async getAllSimulacao(query?: string) {
    const response: AxiosResponse = await API.get(`/simulacao${query}`);
    return response?.data;
  }

  async createSimulacao(SimulacaoPayload: ISimulacaoPayload) {
    const response: AxiosResponse = await API.post(
      `/simulacao`,
      SimulacaoPayload
    );
    return response?.data;
  }

  async updateSimulacao(id: number, SimulacaoPayload: ISimulacaoPayload) {
    const response: AxiosResponse = await API.put(
      `/simulacao/${id}`,
      SimulacaoPayload
    );
    return response?.data;
  }

  async deleteSimulacao(id: number) {
    const response: AxiosResponse = await API.delete(`/simulacao/${id}`);
    return response?.data;
  }
}

export default new SimulacaoClass();
