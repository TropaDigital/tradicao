'use client';

import axios from 'axios';

var baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://tradicao.backendtropa.com.br/';
} else {
  baseUrl = 'https://tradicao.backendtropa.com.br/';
}

const API = axios.create({
  baseURL: baseUrl
});

export default API;
