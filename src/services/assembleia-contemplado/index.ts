import { AxiosResponse } from 'axios';
import API from '../api';
import { IAssembleiaContempladoBody } from './types';

class AssembleiaContempladoClass {
  async deleteAssembleiaContemplado(id: number) {
    const response: AxiosResponse = await API.delete(
      `/assembleia-contemplados/${id}`
    );
    return response?.data;
  }

  async updateAssembleiaContemplado(
    id: number,
    assembleiaContempladoBody: IAssembleiaContempladoBody
  ) {
    const response: AxiosResponse = await API.put(
      `/assembleia-contemplados/${id}`,
      assembleiaContempladoBody
    );
    return response?.data;
  }

  async getAllAssembleiaContemplado(query?: string) {
    const response: AxiosResponse = await API.get(
      `/assembleia-contemplados${query}`
    );
    return response?.data;
  }

  async createAssembleiaContemplado(
    assembleiaContempladoBody: IAssembleiaContempladoBody
  ) {
    const response: AxiosResponse = await API.post(
      `/assembleia-contemplados`,
      assembleiaContempladoBody
    );
    return response?.data;
  }
}

export default new AssembleiaContempladoClass();
