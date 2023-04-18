import { AxiosResponse } from 'axios';
import API from '../api';

class GrupoEncerradoClass {
  async getAllGrupos(query?: string) {
    const response: AxiosResponse = await API.get(
      `/grupos-encerrados${query ?? ''}`
    );
    return response?.data;
  }

  async deleteGrupo(id: number) {
    const response: AxiosResponse = await API.delete(
      `/grupos-encerrados/${id}`
    );
    return response?.data;
  }

  async createGrupo(formData: FormData) {
    const response: AxiosResponse = await API.post(
      `/grupos-encerrados-upload`,
      formData
    );
    return response?.data;
  }

  async updateGrupo(id: number, body: any) {
    const response: AxiosResponse = await API.put(
      `/grupos-encerrados/${id}`,
      body
    );
    return response?.data;
  }
}

export default new GrupoEncerradoClass();
