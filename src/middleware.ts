import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import cookieClass from './utils/cookieClass';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const adminCookieValue = req.cookies.get('AuthorizedAdminConsorcio')?.value;
  const isAnAdmin = cookieClass.verifyIsAnAdmin(
    adminCookieValue ? adminCookieValue : ''
  );

  if (req?.nextUrl?.pathname === '/painel') {
    url.pathname = '/painel/contemplados';
    if (isAnAdmin) return NextResponse.redirect(url);

    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (req?.nextUrl?.pathname?.includes('/painel')) {
    url.pathname = '/login';
    if (!isAnAdmin) return NextResponse.redirect(url);

    return NextResponse.next();
  }

  if (req?.nextUrl?.pathname?.includes('/login')) {
    if (!isAnAdmin) return NextResponse.next();

    url.pathname = '/painel/contemplados';
    return NextResponse.redirect(url);
  }

  return;
}
