import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const isAuthenticated = cookies().has(process.env.NEXT_PUBLIC_COOKIE_NAME!);
  const reqURL: string = request.nextUrl.pathname;

  if (isAuthenticated) {
    if (reqURL.startsWith("/login") || reqURL.startsWith("/apply"))
      return NextResponse.redirect(new URL("/", request.url));
  } else if (reqURL.startsWith("/profile") || reqURL.startsWith("/activities"))
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}
