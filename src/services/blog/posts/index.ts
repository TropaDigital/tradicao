'use client';

import { AxiosResponse } from 'axios';
import API from '../../api';
import cookieClass from '@/utils/cookieClass';
import { IUpdatePostBody } from './PUT/types';

class PostsClass {
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

  async getAllPosts(query?: string) {
    try {
      const response: AxiosResponse = await API.get(`/blog/post${query}`, {
        headers: {
          Authorization: `Bearer ${this.AUTH_TOKEN}`
        }
      });
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updatePost(postBody: IUpdatePostBody, id: number) {
    try {
      const response: AxiosResponse = await API.put(
        `/blog/post/${id}`,
        postBody,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new PostsClass();
