import { NextRequest, NextResponse } from 'next/server';
import { PUBLIC_PATH } from './(global)/constant/PublicPath';
import { ROUTER_PATH } from './(global)/constant/RoutePath';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isPublicPath = PUBLIC_PATH.some((path) => pathname.startsWith(path));

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL(ROUTER_PATH.login, request.url));
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL(ROUTER_PATH.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
