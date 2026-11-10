import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminAuth = request.cookies.get("admin_auth")?.value;

  if (adminAuth !== "true") {
    const pathname = request.nextUrl.pathname;
    const loginUrl = new URL(`/AdminLogin?from=${encodeURIComponent(pathname)}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add/:path*", "/update-delete/:path*"],
};
