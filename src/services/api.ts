'use client';

import axios from 'axios';

const API = axios.create({
  baseURL: `http://192.168.15.18:3000/`
});

export default API;
