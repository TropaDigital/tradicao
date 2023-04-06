'use client';

import cookieClass from '@/utils/cookieClass';
import axios from 'axios';

var baseUrl;

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.12:3000/';
  baseUrl = 'http://192.168.15.14:33333';
} else {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  baseUrl = 'http://192.168.15.14:33333';
}

const API = axios.create({
  baseURL: baseUrl
});

export default API;
