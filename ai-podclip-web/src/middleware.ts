import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./server/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session;

  const url = req.nextUrl;
  const pathname = url.pathname;

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isProtectedPage = pathname.startsWith("/dashboard");

  // ✅ Block unauthenticated users from protected pages
  if (isProtectedPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Block logged-in users from accessing login/signup
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login", "/signup"],
};
