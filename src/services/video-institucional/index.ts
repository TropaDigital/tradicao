import { AxiosResponse } from 'axios';
import API from '../api';

class VideoClass {
  async getVideo() {
    let response: AxiosResponse = await API.get(`/video`);
    return response?.data;
  }

  async updateVideo(videoObject: { url_video: string; url_thumb: string }) {
    let response: AxiosResponse = await API.put(`/video`, videoObject);
    return response?.data;
  }
}

export default new VideoClass();
