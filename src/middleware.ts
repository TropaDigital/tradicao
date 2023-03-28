import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hasAdminCookie = req.cookies.has('AuthorizedAdminConsorcio');

  if (req?.nextUrl?.pathname === '/painel') {
    url.pathname = '/painel/contemplados';
    if (hasAdminCookie) return NextResponse.redirect(url);

    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (req?.nextUrl?.pathname?.includes('/painel')) {
    url.pathname = '/login';
    if (!hasAdminCookie) return NextResponse.redirect(url);

    return NextResponse.next();
  }

  if (req?.nextUrl?.pathname?.includes('/login')) {
    if (!hasAdminCookie) return NextResponse.next();

    url.pathname = '/painel/contemplados';
    return NextResponse.redirect(url);
  }

  return;
}
