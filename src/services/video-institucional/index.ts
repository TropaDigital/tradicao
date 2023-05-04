import { AxiosResponse } from 'axios';
import API from '../api';

class VideoClass {
  async getVideo() {
    let response: AxiosResponse = await API.get(`/video`);
    return response?.data;
  }

  async updateVideo() {
    let response: AxiosResponse = await API.put(`/video`);
    return response?.data;
  }
}

export default new VideoClass();
