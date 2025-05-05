import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("session")?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/oracle") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if ((pathname === "/sign-up" && token) || (pathname === "/login" && token)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
};
