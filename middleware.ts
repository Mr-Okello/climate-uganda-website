import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = [
  "/community",
  "/clubs",
  "/reports",
  "/profile",
  "/admin"
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/admin") && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/community", request.url));
  }

  if (!token.region && !pathname.startsWith("/profile/setup")) {
    return NextResponse.redirect(new URL("/profile/setup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/community/:path*",
    "/clubs/:path*",
    "/reports/:path*",
    "/profile/:path*",
    "/admin/:path*"
  ]
};
