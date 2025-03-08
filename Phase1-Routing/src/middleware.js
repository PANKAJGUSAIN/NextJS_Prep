import { NextResponse } from "next/server";

export function middleware(request) {

    const response = NextResponse.next(); //to fetch the response object that we will return it to the next function
    const themePrefrence = request.cookies.get("theme");

    console.log("herere");

    if(!themePrefrence){
        response.cookies.set("theme" , "Dark");
    }

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
    return response;
}

export const config = {
    matcher: ['/profile', '/dashboard' , '/'],
};