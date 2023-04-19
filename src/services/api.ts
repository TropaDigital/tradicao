'use client';

import axios from 'axios';

import cookieClass from '@/utils/cookieClass';

var baseUrl;
var AUTH_KEY_COOKIE = cookieClass.getCookie('AuthorizedAdminConsorcio');
var AUTH_KEY_STORAGE;

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.12:3000/';
  baseUrl = 'http://192.168.15.14:33333/';

  if (typeof window !== 'undefined') {
    localStorage?.getItem('AuthorizedAdminConsorcio');
  }
} else {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  baseUrl = 'http://192.168.15.14:33333';

  if (typeof window !== 'undefined') {
    localStorage?.getItem('AuthorizedAdminConsorcio');
  }
}

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${AUTH_KEY_STORAGE ?? AUTH_KEY_COOKIE}`
  }
});

export default API;
