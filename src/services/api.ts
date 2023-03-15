'use client';

import axios from 'axios';

const API = axios.create({
  baseURL: `http://192.168.15.15:33333/`
});

export default API;
