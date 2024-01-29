import isValidToken from "./lib/utils/isValidToken";

const { NextResponse } = require("next/server");

export const middleware = (request, response) => {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token");
  const refreshToken = request.cookies.get("refresh-token");

  if (pathname.startsWith("/admin") && (!token || !refreshToken)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/login") && isValidToken(token?.value)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
};

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
