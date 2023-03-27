import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hasAdminCookie = req.cookies.has('AuthorizedAdminConsorcio');

  if (req?.nextUrl?.pathname?.includes('/painel')) {
    if (hasAdminCookie) return NextResponse.next();

    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (req?.nextUrl?.pathname?.includes('/login')) {
    if (!hasAdminCookie) return NextResponse.next();

    url.pathname = '/painel/contemplados';
    return NextResponse.redirect(url);
  }

  return;
}
