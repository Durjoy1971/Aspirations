import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const adminAuth = request.cookies.get("admin_auth")?.value;
  const userAuth = request.cookies.get("user_auth")?.value;

  // 1. Admin route protection
  const isAdminRoute = pathname.startsWith("/add") || pathname.startsWith("/update-delete");
  if (isAdminRoute) {
    if (adminAuth !== "true") {
      const loginUrl = new URL(`/AdminLogin?from=${encodeURIComponent(pathname)}`, request.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // 2. User-only protected routes
  const isUserRoute =
    pathname.startsWith("/skills") ||
    pathname.startsWith("/kids") ||
    pathname.startsWith("/skills-video-list") ||
    pathname.startsWith("/video-play-skills");

  if (isUserRoute) {
    if (userAuth !== "true" && adminAuth !== "true") {
      const loginUrl = new URL(`/login?from=${encodeURIComponent(pathname)}`, request.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add/:path*",
    "/update-delete/:path*",
    "/skills/:path*",
    "/kids/:path*",
    "/skills-video-list/:path*",
    "/video-play-skills/:path*",
  ],
};
