import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';
import crypto from 'crypto';

class CookieClass {
  private ADMIN_COOKIE_NAME = 'AuthorizedAdmin';
  public ADMIN_COOKIE_VALUE: string | undefined;

  private generateRandomCookieValue(length: number) {
    const buffer = crypto.randomBytes(Math.ceil(length / 2));
    const randomID = buffer.toString('hex').slice(0, length);
    return randomID;
  }

  public getCookie(cookieName: string, options?: OptionsType) {
    return getCookie(cookieName, options);
  }

  public setCookie(cookieName: string, cookieValue: string) {
    setCookie(cookieName, cookieValue);
  }

  public setAdminCookie(cookieName = this?.ADMIN_COOKIE_NAME) {
    this.ADMIN_COOKIE_NAME = cookieName;
    this.ADMIN_COOKIE_VALUE = this.generateRandomCookieValue(64);
    setCookie(this.ADMIN_COOKIE_NAME, this.ADMIN_COOKIE_VALUE);
  }

  public verifyIsAnAdmin(cookieValue: string) {
    return cookieValue?.length === 64;
  }

  public removeCookie(cookieName: string) {
    deleteCookie(cookieName);
  }
}

export default new CookieClass();
