'use client';

import axios from 'axios';

import cookieClass from '@/utils/cookieClass';

var baseUrl;
var AUTH_KEY_COOKIE = cookieClass.getCookie('AuthorizedAdminConsorcio');
var AUTH_KEY_STORAGE;

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://192.168.15.14:33333';
  baseUrl = 'https://backend.trad1.com.br/';
} else {
  baseUrl = 'https://backend.trad1.com.br/';
  // baseUrl = 'http://192.168.15.14:33333';
}

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${AUTH_KEY_STORAGE ?? AUTH_KEY_COOKIE}`
  }
});

export default API;
