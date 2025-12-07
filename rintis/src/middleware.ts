import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthPage =
    pathname.startsWith('/login') || pathname.startsWith('/register');

  // Jika sudah login dan mencoba ke /login atau /register → redirect ke dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika sudah login dan akses root (/) → redirect ke dashboard
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika belum login dan menuju halaman yang butuh proteksi → redirect ke login
  const protectedRoutes = [
    '/dashboard',
    '/catat-pemasukan',
    '/catat-pengeluaran',
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!token && isProtected) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/catat-pemasukan/:path*',
    '/catat-pengeluaran/:path*',
    '/login',
    '/register',
  ],
};
