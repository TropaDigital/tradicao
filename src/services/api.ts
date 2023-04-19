'use client';

import axios from 'axios';

import cookieClass from '@/utils/cookieClass';

var baseUrl;
var AUTH_KEY_COOKIE = cookieClass.getCookie('AuthorizedAdminConsorcio');
var AUTH_KEY_STORAGE = localStorage?.getItem('AuthorizedAdminConsorcio');

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.12:3000/';
  // baseUrl = 'http://192.168.15.14:33333/';
  baseUrl = 'http://192.168.0.66:33333/';
} else {
  baseUrl = 'https://tradicao.backendtropa.com.br/';
  // baseUrl = 'http://192.168.15.15:33333';
}

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${AUTH_KEY_STORAGE ?? AUTH_KEY_COOKIE}`
  }
});

export default API;
