'use client';

import { AxiosError, AxiosResponse } from 'axios';
import API from '../../api';
import { IUpdatePostBody } from './PUT/types';

class PostsClass {
  async getAllPosts(query?: string) {
    try {
      const response: AxiosResponse = await API.get(`/blog/post${query}`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updatePost(postBody: IUpdatePostBody, id: number) {
    try {
      const response: AxiosResponse = await API.put(
        `/blog/post/${id}`,
        postBody
      );
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async createPost(postBody: IUpdatePostBody) {
    try {
      let response: AxiosResponse = await API.post(`/blog/post`, postBody);
      return response?.data;
    } catch (err: any) {
      console.log(err);
      throw err?.response?.data?.result[0]?.erro;
    }
  }

  async deletePost(id: number) {
    try {
      const response: AxiosResponse = await API.delete(`/blog/post/${id}`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new PostsClass();
