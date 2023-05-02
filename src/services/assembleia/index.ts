import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
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

  async createAssembleia(formData: any) {
    try {
      const response: AxiosResponse = await API.post(
        `/assembleia-upload`,
        formData
      );
      return response?.data;
    } catch (err: any) {
      toast.error(err?.response?.data?.result[0]?.error);
      throw 'Error';
    }
  }

  async updateAssembleia(id: number, assembleiaFormData: FormData) {
    const response: AxiosResponse = await API.put(
      `/assembleia/${id}`,
      assembleiaFormData
    );
    return response?.data;
  }
}

export default new AssembleiaClass();
