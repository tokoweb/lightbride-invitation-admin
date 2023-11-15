const { NextResponse } = require("next/server");

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/admin/dashboard", request.url));
};

export const config = {
  matcher: ["/", "/admin"],
};
