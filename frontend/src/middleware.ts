import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const isAuthenticated = cookies().has("access_token");
  const reqURL: string = request.nextUrl.pathname;

  if (isAuthenticated) {
    if (reqURL === "/login" || reqURL === "/apply")
      return NextResponse.redirect(new URL("/members", request.url));
  } else if (reqURL.startsWith("/members")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
