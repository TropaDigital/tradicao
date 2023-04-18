'use strict';

import { AxiosResponse } from 'axios';
import API from '../api';
import { ILogin } from './types';
import CookieClass from '../../utils/cookieClass';
import { toast } from 'react-toastify';

class LoginClass {
  private AUTH_TOKEN: string | undefined;

  async getAuthToken(loginPanel: ILogin) {
    try {
      const response: AxiosResponse = await API.post(`login`, loginPanel);
      const authToken: string | undefined = await response?.data?.result?.token;
      if (!authToken) {
        throw new Error('Token de autenticação inválido');
      }
      this.AUTH_TOKEN = authToken;
      CookieClass?.setCookie('AuthorizedAdminConsorcio', this?.AUTH_TOKEN);
      localStorage?.setItem('AuthorizedAdminConsorcio', this?.AUTH_TOKEN);
      return true;
    } catch (err) {
      toast.error('E-mail ou senha inválidos');
    }
  }
}

const loginClass = new LoginClass();

export { loginClass };
