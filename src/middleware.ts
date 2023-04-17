import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const adminCookieValue = req.cookies.get('AuthorizedAdminConsorcio')?.value;

  if (req?.nextUrl?.pathname === '/painel') {
    url.pathname = '/painel/blog';
    if (adminCookieValue?.length === 64) return NextResponse.redirect(url);

    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (req?.nextUrl?.pathname?.includes('/painel')) {
    url.pathname = '/login';
    if (!adminCookieValue) return NextResponse.redirect(url);

    return NextResponse.next();
  }

  if (req?.nextUrl?.pathname?.includes('/login')) {
    if (!adminCookieValue) return NextResponse.next();

    url.pathname = '/painel/blog';
    return NextResponse.redirect(url);
  }

  return;
}
