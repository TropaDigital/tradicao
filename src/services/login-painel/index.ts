'use strict';

import { AxiosResponse } from 'axios';
import API from '../api';
import { ILogin } from './types';
import CookieClass from '../../utils/cookieClass';

class LoginClass {
  private AUTH_TOKEN: string | undefined;

  async getAuthToken(loginPanel: ILogin): Promise<string> {
    try {
      const response: AxiosResponse = await API.post(`login`, loginPanel);
      const authToken: string | undefined = await response?.data?.result?.token;
      if (!authToken) {
        throw new Error('Token de autenticação inválido');
      }
      this.AUTH_TOKEN = authToken;
      CookieClass.setCookie('AuthorizedAdminConsorcio', this?.AUTH_TOKEN);
      return authToken;
    } catch (err) {
      console.log(err);
      throw new Error('Não foi possível obter o token de autenticação');
    }
  }
}

const loginClass = new LoginClass();

export { loginClass };
