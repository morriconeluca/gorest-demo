import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './middleware.models';
import { decrypt } from './lib/auth/jwt';
import { updateSession } from './lib/auth/session';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = ROUTES.protected.includes(path);
  const isPublicRoute = ROUTES.public.includes(path);

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId && !isPublicRoute) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }

  if (session?.userId) {
    if (isPublicRoute || req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/posts', req.nextUrl));
    } else if (isProtectedRoute) {
      return updateSession();
    }
  }

  return NextResponse.next();
}

// Exclude static files
export const config = { matcher: '/((?!.*\\.).*)' };
