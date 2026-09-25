import { NextRequest, NextResponse } from 'next/server';
import { PublicPath } from './app/(global)/constant/PublicPath';
import { RoutePath } from './app/(global)/constant/RoutePath';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    const isPublicPath = PublicPath.some((path) => pathname.startsWith(path));

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL(RoutePath.login, request.url));
    }

    if (token && isPublicPath) {
        return NextResponse.redirect(new URL(RoutePath.dashboard, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};