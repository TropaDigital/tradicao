'use client';

import axios from 'axios';

import cookieClass from '@/utils/cookieClass';

var baseUrl;
var auth_key = cookieClass.getCookie('AuthorizedAdminConsorcio');

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.12:3000/';
  baseUrl = 'http://192.168.15.14:33333/';
} else {
  baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.15:33333';
}

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${auth_key}`
  }
});

export default API;
