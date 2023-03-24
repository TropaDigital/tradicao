import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

class CookieClass {
  getCookie(cookieName: string, options?: OptionsType) {
    getCookie(cookieName, options);
  }

  setCookie(cookieName: string, cookieValue: string) {
    setCookie(cookieName, cookieValue);
  }

  removeCookie(cookieName: string) {
    deleteCookie(cookieName);
  }
}

export default new CookieClass();
