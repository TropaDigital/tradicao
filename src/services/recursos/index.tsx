import { AxiosResponse } from 'axios';
import API from '../api';

class RecursosClass {
  async getAllRecursos(query?: string) {
    const response: AxiosResponse = await API.get(
      `/nao-procurados${query ?? ''}`
    );
    return response?.data;
  }

  async createRecursos(urlPlanilha: string) {
    const response: AxiosResponse = await API.post(`/nao-procurados-upload`, {
      url_planilha: urlPlanilha
    });
    return response?.data;
  }
}

export default new RecursosClass();
