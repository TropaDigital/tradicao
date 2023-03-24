'use client';

import axios from 'axios';

var baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http:///192.168.15.11:3000/';
} else {
  baseUrl = 'https://tradicao.backendtropa.com.br/';
}

const API = axios.create({
  baseURL: baseUrl
});

export default API;
