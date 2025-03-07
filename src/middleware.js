import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/profile')) {
        // Middleware logic for /profile route
        return NextResponse.redirect(new URL('/profile-redirect', request.url));
    }

    if (pathname.startsWith('/dashboard')) {
        // Middleware logic for /dashboard route
        return NextResponse.redirect(new URL('/dashboard-redirect', request.url));
    }

    // Default middleware logic
    return NextResponse.next();
}

export const config = {
    matcher: ['/profile', '/dashboard'],
};