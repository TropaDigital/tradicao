import { AxiosResponse } from 'axios';
import API from '../api';

class AssembleiaClass {
  async getAllAssembleias(query?: string) {
    const response: AxiosResponse = await API.get(`/assembleia${query ?? ''}`);
    return response?.data;
  }

  async deleteAssembleia(id: number) {
    const response: AxiosResponse = await API.delete(`/assembleia/${id}`);
    return response?.data;
  }

  async createAssembleia(assembleiaBody: FormData) {
    const response: AxiosResponse = await API.post(`/assembleia-upload`, {
      assembleiaBody
    });
    return response?.data;
  }
}

export default new AssembleiaClass();
