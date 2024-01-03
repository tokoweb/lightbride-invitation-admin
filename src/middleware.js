import isValidToken from "./lib/utils/isValidToken";

const { NextResponse } = require("next/server");

export const middleware = (request, response) => {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token");

  if (pathname.startsWith("/admin") && !token) {
    console.log("redirect");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/login") && isValidToken(token?.value)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // console.log(role);
};

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
